import { useMutation } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import { EditUser, EditUserVariables } from '../../types/api'
import { useDropzone } from 'react-dropzone';
import { storage } from '../../Firebase';
import useInput from '../../Hooks/useInput';
import { ImageUpload } from '../Icon';
import { EDIT_USER } from './PopUpQueries';
import * as S from './PopUpStyles'
import Loader from '../Loader';
import { toast } from 'react-toastify';


interface IProps {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    me: any
}

const PopUpPresenter: React.FC<IProps> = ({ setPopup, me }) => {
    const [image, setImage] = useState<any>();
    const [flag, setFlag] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0)
    const [firstName, firstNameChange] = useInput("");
    const [lastName, lastNameChange] = useInput("");
    const [intro, introChange] = useInput("");
    const [imageUrl, setImageUrl] = useState<string>('')

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: "image/png, image/jpeg" });

    const [EditUserMutation] = useMutation<EditUser, EditUserVariables>(EDIT_USER, {
        variables: {
            firstName,
            lastName,
            intro,
            profilePhoto: imageUrl
        },
        onCompleted: ({ EditUser }) => {
            const { ok, err } = EditUser
            if (ok) {
                toast.success("User Data edited")
                setPopup(false);
                window.location.reload();
            } else {
                console.log(err)
            }
        }
    })


    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target && event.target.files) {
            if (event.target !== null && event.target.files && event.target.files.length !== null) {
                setImage(event.target.files[0]);
                setFlag(true)
            }
        }
    }

    useEffect(() => {
        if (flag && me && image) {
            let uplaodTask = storage.ref(`/${me.username}/profile/${image.name}`).put(image);
            uplaodTask.on(
                "state_changed",
                (snapshot) => {
                    const percentUpload = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(percentUpload)
                },
                (err) => console.log(err),
                () => {
                    storage.ref(`/${me.username}/profile/`).child(`${image.name}`).getDownloadURL().then((url) => setImageUrl(url))
                }
            )
        }
    }, [flag, me, image])

    return (
        <S.Container>
            <S.Headbar>
                <S.ExitButton onClick={() => setPopup(false)}>X</S.ExitButton>
            </S.Headbar>
            <S.PopupBody>
                {progress === 0 ?
                    <S.UploadDiv {...getRootProps()}>
                        <input {...getInputProps()} onChange={handleUpload} />
                        <ImageUpload />
                    Click here or drag image to upload
                </S.UploadDiv> : progress === 100 ? "Uploaded" : <Loader />}

                <S.Row>
                    <S.Title>First Name</S.Title>
                    <S.Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={firstNameChange}
                    />
                </S.Row>
                <S.Row>
                    <S.Title>Last Name</S.Title>
                    <S.Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={lastNameChange}
                    />
                </S.Row>
                <S.Row>
                    <S.Title>Intro</S.Title>
                    <S.Input
                        type="text"
                        placeholder="Intro"
                        value={intro}
                        onChange={introChange}
                    />
                </S.Row>
            </S.PopupBody>
            <S.PopUpBottom>
                <S.Button onClick={() => EditUserMutation()}>Submit</S.Button>
            </S.PopUpBottom>
        </S.Container>
    )
}

export default PopUpPresenter;