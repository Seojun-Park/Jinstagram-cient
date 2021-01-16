
import React from 'react'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
import FeedBox from '../../Components/FeedBox'
import { useDropzone } from 'react-dropzone'
import { ImageUpload } from '../../Components/Icon'
import * as S from './HomeStyles'

interface IProps {
    me: any
    posts: any
    imageUrl: any
    setImageUrl: any
    progress: number
    handleUpload: (
        e: React.ChangeEvent<HTMLInputElement>) => void
    flag: boolean
    caption: string
    setCaption: (
        e: React.ChangeEvent<HTMLTextAreaElement>) => void
    UploadPostMutation: any
    handlePost: any
}

const HomePresenter: React.FC<IProps> = ({
    me,
    posts,
    imageUrl,
    setImageUrl,
    handleUpload,
    progress,
    flag,
    caption,
    setCaption,
    UploadPostMutation,
    handlePost
}) => {

    const { getRootProps, getInputProps } = useDropzone({ accept: "image/png, image/jpeg" })
    return (
        <S.Wrapper>
            <Header url={me.profilePhoto} />
            <S.Container>
                <S.Post>
                    <S.Textarea
                        placeholder="Add a caption"
                        value={caption}
                        onChange={setCaption}
                    />
                    <S.Row>
                        <S.UploadDiv {...getRootProps()}>
                            <input {...getInputProps()} onChange={handleUpload} />
                            {flag ? (progress !== 100 ? <Loader /> : "")
                                : <ImageUpload />
                            }
                        </S.UploadDiv>
                        {flag ? (progress !== 100 ? <Loader /> :
                            <S.Button onClick={() => handlePost()}>Upload</S.Button>) :
                            <S.Button onClick={() => handlePost()}>Upload</S.Button>}
                    </S.Row>
                </S.Post>
                {posts && posts.map((post: any, index: number) => <FeedBox key={index} posts={post} />)}
            </S.Container>
        </S.Wrapper >
    )
}

export default HomePresenter