import React, { useEffect, useState } from 'react'
import * as S from './HeaderStyles'

const HeaderPresenter = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [clicked, setClicked] = useState<boolean>(false)


    // console.log("menu", showMenu, "click", clicked);
    const closeMenu = (event?: React.MouseEvent<HTMLElement>) => {
        console.log(event)
        console.log("here?")
    }

    return (
        <S.Container>
            <S.Col></S.Col>
            <S.Col><S.Search type="text" placeholder="Search" /></S.Col>
            <S.Col>
                <S.MenuButton onClick={() => {
                    showMenu ?
                        setShowMenu(false)
                        : setShowMenu(true);
                    document.addEventListener("click", () => closeMenu())
                }}>
                    show menu</S.MenuButton>
                {showMenu === true &&
                    <S.Menu>
                        <S.ItemButton>Menu Item1</S.ItemButton>
                        <S.ItemButton>Menu Item2</S.ItemButton>
                        <S.ItemButton>Menu Item3</S.ItemButton>
                    </S.Menu>
                }
            </S.Col>
        </S.Container>
    )
}

export default HeaderPresenter