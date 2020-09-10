import React from 'react';
import styled from 'styled-components';
import ImgDrogaRaia from '../../assets/images/drogaraia.png';
import ImgLogoSmall from '../../assets/images/rd-small.png';
import ImgDrogasil from '../../assets/images/drogasil.png';
import ImgFarmasil from '../../assets/images/farmasil.png';
import ImgUnivers from '../../assets/images/univers.png';
import img4bio from '../../assets/images/4bio.png';


const Rodape=styled.footer`
    display:flex;
    width:87%;
    justify-content:space-between;
    align-itens: center;
    height: 77px;
    margin:0 auto;
 
    small{
        display:flex;
        margin: 1.4rem 0;
        padding-right:1.8rem;
        padding: 0.5rem 0
    }
    img{
        margin:1rem 0;
    }

`;
const Marcas=styled.div`
    display:flex;
    margin-right: 20.0rem;
    align-itens:center;
    img{
        padding: 0.2rem 0.55rem;
        margin-bottom:1rem;
    }
`;

const Footer = () =>{
    return(
        <>
        <Rodape>
             <small>RD 2017. Todos os direitos reservados</small>
             <Marcas>
                <img alt="DrogaRaia"   src={ImgDrogaRaia}></img>
                <img alt="Drogasil"    src={ImgDrogasil}></img>
                <img alt="Farmasil"    src={ImgFarmasil}></img>
                <img alt="Univers"     src={ImgUnivers}></img>
                <img alt="4Bio"        src={img4bio}></img>
             </Marcas>
             <div>
                <img alt="small logo RaiaDrogasil" src={ImgLogoSmall}></img>
            </div>
        </Rodape>
       </>
    );
}
export default Footer;