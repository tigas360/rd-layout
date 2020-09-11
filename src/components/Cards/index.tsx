import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CardProperties{
    title: string,
    sumary: string,
    image?:string,
    buttontext?:string,
    buttontextcolor?:string,
    buttonbgcolor?:string,
    bgcolor?:string,
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
const CardHeader=styled.div.attrs((props:any)=>({
    bgcolor:props.bgcolor || 'yellow',
}))`
    display:flex;
    flex-direction:column;
    text-align:center;
    padding: 1rem 0.5rem;
    margin: 0 auto;
    background: var(${(props:any)=>props.bgcolor});
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
const CardButton=styled(Link).attrs((props:any)=>({
    buttontextcolor: props.buttontextcolor || 'blue',  
  buttonbgcolor:props.buttonbgcolor || 'gray',
}))`
    display:block;
    color: ${(props:any) => props.buttontextcolor};
    padding: .3rem;
    min-width:64px;
    height:32px;
    margin-right:12px;
    background-color: var(${(props:any) => props.buttonbgcolor});
`;


const Cards:React.FC<CardProperties>=(props)=>{

    return(
        <>
            <CardBox>
                <CardHeader bgcolor={props.bgcolor}>
                    <Img alt={props.image} src={props.image}></Img>
                    <Label>{props.title}</Label>
                </CardHeader>
                <CardBody>
                    {props.sumary}
                </CardBody>
                <CardFooter>
                    {
                    props.buttontext &&
                    <CardButton buttontextcolor={props.buttontextcolor} 
                                buttonbgcolor={props.buttonbgcolor} 
                                to="/">{props.buttontext}
                    </CardButton>
                    }
                </CardFooter>
            </CardBox>
        </>
    );
}
export default Cards;