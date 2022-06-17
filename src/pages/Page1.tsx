import React from 'react'
import styled from 'styled-components'
export const Page1 = () => {
    const [text, setText] = React.useState('')
    const [items, setItems] = React.useState([''])
    const addItem = (text: string) => {
        setItems([...items, text])
    }
    return (
        <Cunteynir>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => { addItem(text) }}>Добавить</button>
            {items.map((x) => {
                return <div>{x} <button>Удалить</button> </div>
            })}

        </Cunteynir>
    )
}
const Cunteynir = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`