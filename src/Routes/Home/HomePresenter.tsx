
import React from 'react'
import Header from '../../Components/Header'
import FeedBox from '../../Components/FeedBox'
import { useDropzone } from 'react-dropzone'
import { ImageUpload } from '../../Components/Icon'
import * as S from './HomeStyles'

interface IProps {
    me: any
    posts: any
    term: string
    termChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
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
    term,
    termChange,
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
            <Header url={me.profilePhoto} term={term} termChange={termChange} />
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
                            {flag ? (progress !== 100 ? "loading" : "preview?")
                                : <ImageUpload />
                            }
                        </S.UploadDiv>
                        <S.Button onClick={() => handlePost()}>Post</S.Button>
                    </S.Row>
                </S.Post>
                {me.following === null ? "you don't follow anyone" : "so on"}
                {/* map method will be done on here */}
                <FeedBox posts={posts} />
            </S.Container>
        </S.Wrapper >
    )
}

export default HomePresenter