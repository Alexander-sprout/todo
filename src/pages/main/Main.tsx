import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Main = () => {
    return (
        <Cunteynir>
            <But to={'/Page1'}>Важное</But>
            <But to={'/Page2'}>В ближайшее время</But>
            <But to={'/Page3'}>На подумать</But>
        </Cunteynir>
    )
}
const Cunteynir = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: black; */
    /* height: 100%; */
`

const But = styled(Link)`
    border-radius:100px;
    /* background-color: blueviolet; */
    background-color: black;
    font-size: 148px;
    text-align: center;
    padding: 60px;
    color: blueviolet;
    text-decoration: none;
    margin: 5px;
    `
