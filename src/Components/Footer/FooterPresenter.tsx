import React from "react";
import * as S from './FooterStyles'

const FooterPresenter = () => {
    return (
        <S.Container>
            <S.CopyRight>Jinstagram {new Date().getFullYear()}&copy;</S.CopyRight>
        </S.Container>
    )
};

export default FooterPresenter;
