import React from 'react'
import styled from 'styled-components'
export const Page2 = () => {
    const [text, setText] = React.useState('')
    const [items, setItems] = React.useState('')
    return (
        <Cunteynir>
            <input />
            <button>Добавить</button>
        </Cunteynir>
    )
}
const Cunteynir = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`