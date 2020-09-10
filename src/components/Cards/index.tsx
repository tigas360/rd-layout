import React, { Props } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CardProperties{
    title: string,
    sumary: string,
    image?:string,
    buttonText?:string,
    buttonTextColor?:string,
    buttonBgColor?:string
}

const CardBox=styled.div`
    display:flex;
    flex-direction:column;
    max-width:27%;
    margin:0.8rem;
    @media screen and (max-width:500px){
        min-width:90%;
    }
`;
const CardHeader=styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    padding: 1rem 0.5rem;
    margin: 0 auto;
    background: var(--rd-salmon-rose);
    width:100%;
    @media screen and (max-width:500px){
        align-items:center;
        min-width:90%;
    }
`;
const Label=styled.label`
    padding:8px;
    font-family: 'Open Sans','Helvetica','Sans-serif','Arial1';
    color: white;
    font-size:1.4rem;
    font-weight: 300;
`;
const Img=styled.img`
    display:flex;
    padding:1.7rem;
    @media screen and (max-width:500px){
        align-content:center;
    }
`;
const CardBody=styled.div`
    background-color:white;
    padding: .4rem .5rem;
    font-size:15px;
    font-weight:300;
`;
const CardFooter=styled.div`
    display:flex;
    background-color:white;
    min-height:48px;
    justify-content:flex-end;
`;

interface IColorProps{
    buttonTextColor?:string;
    buttonBgColor?:string;
}
const CardButton=styled(Link)<IColorProps>`
    display:block;
    color: ${props => `${props.buttonTextColor}`||"white"};
    padding: .3rem;
    min-width:64px;
    height:32px;
    margin-right:12px;
    background-color: ${props => `${props.buttonBgColor}`}||'lightblue';
`;

const Cards:React.FC<CardProperties>=(props)=>{
    console.log(props.buttonBgColor);
    return(
        <>
            <CardBox>
                <CardHeader>
                    <Img alt={props.image} src={props.image}></Img>
                    <Label>{props.title}</Label>
                </CardHeader>
                <CardBody>
                    {props.sumary}
                </CardBody>
                <CardFooter>
                    {
                    props.buttonText &&
                    <CardButton to="/">{props.buttonText}</CardButton>
                    }
                </CardFooter>
            </CardBox>
        </>
    );
}
export default Cards;