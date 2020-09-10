import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/rd.png'
import { Link } from 'react-router-dom';

const header = styled.header`
    display:flex;
    flex-direction:column;
`;

const Nav = styled.nav`
    width:87%;
    margin: 0 auto;
    height:82px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    top:0;
    left:0;
    right:0;
    padding-top: 2.6rem 0;

    border-bottom:1px solid var(--rd-lightgray);
`;
const RightMenu=styled.div`
    text-decoration:none;
    padding-bottom: 1.8rem;
    padding-right:0.5rem;
`;

const ButtonMenu=styled(Link)`
    padding: 0 0.6rem;
    text-decoration:none;
    color: #007F56;
`;
const MainMenu=()=>{

    return(
        <>
            <header>
                <Nav className="mainMenu">
                    <img alt="RD Gente Saúde e Bem-estar" src={logo}></img>
                    <RightMenu>
                        <ButtonMenu to="/" >HTML5</ButtonMenu>
                        <ButtonMenu to="/" >CSS</ButtonMenu>
                        <ButtonMenu to="/" >JAVASCRIPT</ButtonMenu>
                        <ButtonMenu to="/" >REACT</ButtonMenu>
                        <ButtonMenu to="/" >REDUX</ButtonMenu>
                    </RightMenu>
                </Nav>
            </header>
        </>
    );
}
export default MainMenu;