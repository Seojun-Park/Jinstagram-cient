import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { storage } from '../../Firebase';
import useInput from '../../Hooks/useInput';
import { ImageUpload } from '../Icon';
import * as S from './PopUpStyles'


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
                <S.UploadDiv {...getRootProps()}>
                    <input {...getInputProps()} onChange={handleUpload} />
                    <ImageUpload />
                    Click here or drag image to upload
                </S.UploadDiv>
                <S.Row>
                    <S.Title>First Name</S.Title>
                    <S.Input type="text" placeholder="First Name" />
                </S.Row>
                <S.Row>
                    <S.Title>Last Name</S.Title>
                    <S.Input type="text" placeholder="Last Name" />
                </S.Row>
                <S.Row>
                    <S.Title>Intro</S.Title>
                    <S.Input type="text" placeholder="Intro" />
                </S.Row>
            </S.PopupBody>
            <S.PopUpBottom>
                <S.Button>Submit</S.Button>
            </S.PopUpBottom>
        </S.Container>
    )
}

export default PopUpPresenter;