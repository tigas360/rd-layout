import React from 'react';
import styled from 'styled-components';
import MainMenu from '../../../components/MainMenu';
import Footer from '../../../components/Footer';

const Main=styled.main`
    display:flex;
    flex: 1 0 auto;
    width:95%;
    min-height:77vh;
    padding:12px;
    margin:0 auto;
    justify-content:center;
`;
const Classic:React.FC<{}>=({children})=>{
    return(
        <>
            <MainMenu></MainMenu>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
}
export default Classic;