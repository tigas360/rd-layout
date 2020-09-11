import React from 'react';
import Classic from '../templates/Classic';
import Cards from '../../components/Cards';
import ImgDesktop from '../../assets/images/desktop.png';
import ImgTablet from '../../assets/images/tablet.png';
import ImgMobile from '../../assets/images/mobile.png';
import styled from 'styled-components';

const Row=styled.div`
    display:flex;
    position:relative;
    .centered{
        justify-content:center;
    }
    @media screen and (max-width:500px){
        flex-direction:column;
        min-width:100%;
    }
`;
const Col=styled.div`
    display:flex;
    flex-direction:column;
    .center{
        justify-content:center;
    }
`;
const Title=styled.h1`
    font-weight: 300;
    color: var(--rd-green);
`;

const Home=()=>{

    return(
        <>
            <Classic>
                <Col>
                    <Row className="center">
                        <Title>
                            Crie este site <strong>Responsívo</strong> com <strong>REACT</strong>
                        </Title>
                    </Row>
                    <Row className="center">
                        <Title>
                            utilizando <b>styled-component</b>
                        </Title>
                    </Row>
                    <Row className="center">
                        <Cards title="Site Responsívo DESKTOP"
                                sumary="Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down."
                                image={ImgDesktop}
                                buttontext="Leia mais..."
                                bgcolor="--rd-salmon-rose"
                                buttonbgcolor="--rd-salmon-rose"
                                buttontextcolor="white"></Cards>
                        <Cards title="Site Responsívo TABLET"
                                sumary="Quando pressionado o botão Leia mais... a informação deverá aparecer completa em um popup na tela."
                                image={ImgTablet}
                                bgcolor="--rd-light-orange"
                                buttontext="Leia mais..."
                                buttonbgcolor="--rd-light-orange"
                                buttontextcolor="white"></Cards>
                        <Cards title="Site Responsívo MOBILE"
                                sumary="Quando pressionado o botão alterar tema... modifique o tema do site para blackfriday a seu gosto."
                                image={ImgMobile}
                                bgcolor="--rd-purple"
                                buttontext="Alterar tema..."
                                buttonbgcolor="--rd-purple"
                                buttontextcolor="white"></Cards>
                    </Row>
                </Col>
            </Classic>
        </>
    );
}
export default Home;