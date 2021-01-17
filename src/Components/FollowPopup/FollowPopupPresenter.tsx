import React, { useEffect } from 'react';
import * as S from './FollowPopupStyles'

interface IProps {
    setFollowPopup: React.Dispatch<React.SetStateAction<boolean>>
    user: any
    action: string
}

const FollowPopupPresenter: React.FC<IProps> = ({ setFollowPopup, user, action }) => {
    useEffect(() => {
        const clicked = () => {
            setFollowPopup(false)
        }
        document.addEventListener("click", clicked);
        return () => document.removeEventListener("click", clicked)
    }, [setFollowPopup])
    return (
        <S.Container>
            <S.Headbar>
                <S.TitleDiv>
                </S.TitleDiv>
                <S.Title>{action} List</S.Title>
                <S.ExitButton onClick={() => setFollowPopup(false)}>X</S.ExitButton>
            </S.Headbar>
            <S.PopupBody>
                {action === "follower" && (
                    user.followers && user.followers.map((user: any, index: number) => {
                        return (
                            <S.ExtendedLink key={index} to={`/profile/${user.username}`}>
                                <S.Row>
                                    <S.ProfileImage src={user.profilePhoto} alt={"user"} />
                                    <S.RowUsername>{user.username}</S.RowUsername>
                                </S.Row>
                            </S.ExtendedLink>
                        )
                    })
                )}
            </S.PopupBody>
        </S.Container>
    )
}

export default FollowPopupPresenter