import React from 'react'
import styled from 'styled-components'


export const Page1 = () => {

    const [text, setText] = React.useState('')
    const [items, setItems] = React.useState([
        { text: 'str', checked: false },
    ])
    const [checked, setChecked] = React.useState(false)
    // const [penis, setPenis] = React.useState({})
    const addItem = (text: string) => {
        setItems([...items, {
            text: text, checked: checked
        }])
        setText('')
    }
    const onCheck = (targetInd: number) => {
        const newItem = items.map((item, index) => {
            if (index === targetInd) {
                item.checked = !item.checked
            }
            return item
        })
        setItems(newItem)
    }
    const handleDelete = (indexToDelete: number) => {
        setItems(items.filter((v, index) => index !== indexToDelete))
    }
    const checkedCount = items.filter((item) => item.checked).length

    const chek = () => {
        setChecked(!checked)
    }
    // const onKeyDown = () => {
    //     addItem(text)
    // }
    return (
        <Cunteynir>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => { addItem(text) }}>Добавить</button>
            {/* <button onClick={() => setItems([])}>Убрать всё</button> */}
            <button onClick={() => chek()}>выбрать всё</button>
            {/* <div onKeyPress={addItem(text)}></div> */}

            {items.map((x, index) => {
                // if (x.length >= 1) {
                return (
                    <div>
                        <NumInd>{index})</NumInd>
                        <input type="checkbox" checked={x.checked} onChange={() => onCheck(index)} />
                        {x.text}
                        <DelBut onClick={() => handleDelete(index)}>x</DelBut>
                    </div >
                )
                // }
            }
            )
            }
        </Cunteynir >
    )
}
const Cunteynir = styled.div` 
    display: flex;
            flex-direction: column;
            justify-content: space-between;


            `
const DelBut = styled.button`
                background-color:red;
                border-radius:69px;
                border-color: blue;
                
            `
const NumInd = styled.div`
    color: #088421;
`

function index(index: any): void {
    throw new Error('Function not implemented.')
}
