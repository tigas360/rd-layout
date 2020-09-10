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

    @media screen and (max-width:500px){
        flex-direction:column;
        align-items:flex-start;
        margin-top:32px;
        width:100%;
        &.mainMenu > div > img{
            width:calc(180px/2);
            height:calc(78px/2);
        }
    }
`;
const RightMenu=styled.div`
    text-decoration:none;
    padding-bottom: 1.8rem;
    padding-right:0.5rem;

    @media screen and (max-width:500px){
        display:flex;
        flex-direction:column;
        magin-top:1.2rem;
        background-color:var(--rd-light-orange);
        width:70%;
        z-index:100;
        font-weight:800;
    }
`;

const ButtonMenu=styled(Link)`
    padding: 0 0.6rem;
    text-decoration:none;
    color: #007F56;
    @media screen and (max-width:500px){
        display:flex;
        flex-direction:column;
        width:100%;
        border:1px solid var(--rd-lightgray);
        &:hover{
            border-bottom:2px solid var(--rd-green);
        }
    }
`;
const MainMenu=()=>{

    return(
        <>
            <header>
                <Nav className="mainMenu">
                    <div>
                        <img alt="RD Gente Saúde e Bem-estar" src={logo}></img>
                    </div>
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