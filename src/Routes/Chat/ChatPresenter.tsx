import React from "react";
import Header from '../../Components/Header'
import * as S from './ChatStyles'

interface IProps {
    me: any
}

const ChatPresenter: React.FC<IProps> = ({ me }) => {
    return (
        <S.Wrapper>
            <Header url={me.profilePhoto} />
        </S.Wrapper>
    )
};

export default ChatPresenter