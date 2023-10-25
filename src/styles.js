import styled from 'styled-components'
import Bg1 from './assets/bg1.svg'

export const Container = styled.div`
    background: url(${Bg1});
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 40px;
`

export const Imagem = styled.img`

    margin-top: 30px;
`

export const ContainerItens = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6)0.84%, rgba(255, 255, 255, 0.6)0.85%, rgba(255, 255, 255, 0.15)100%);
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    width: 414px;
    height: 100vh;
`

export const H1 = styled.h1`

    font-size: 34px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin-bottom: 80px;
`

export const Label = styled.p`

    font-size: 20px;
    font-weight: 700;
    color: #eee;
    margin-left: 25px;

`

export const Input = styled.input`

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    width: 342px;
    height: 58px;
    border: none;
    padding-left: 25px;
    font-size: 18px;
    line-height: 28px;
    font-weight: normal;
    color: #fff;
    margin-bottom: 34px;

    &::placeholder{
        color: #fff;
    }
`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }
`

export const Users = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    margin-top: 20px;
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    border-radius: 14px;
    

    button{
        border: none;
        cursor: pointer;
        background: none;
    }
`