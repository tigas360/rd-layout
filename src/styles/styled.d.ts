import {DefaultTheme} from 'styled-components';
declare module "styled-components"{
    export interface DefaultTheme{
        title:string;
        buttonTextColor:string;
        buttonBgColor:string;
        colors: {
            green: string;
            gray: string;
            lightgray: string;
            salmon_rose: string;
            light_orange: string;
            purple: string;
        }
    }
}