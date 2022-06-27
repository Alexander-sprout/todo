import React, { useState } from 'react'
import styled from 'styled-components'

export const Page1 = () => {

    const [text, setText] = React.useState('')
    const [items, setItems] = React.useState<{ text: string, checked: boolean }[]>([])
    const [checked, setChecked] = React.useState(false)
    const addItem = (text: string) => {
        setItems([...items, {
            text: text, checked: false
        }])
        setText('')
    }
    const delOnCheck = () => {
        setItems(items.filter((item, index) => {
            // setChecked(false)
            return item.checked === false
        }))
    }
    React.useEffect(() => {
        const allChecked = items.every((item) => item.checked)
        if (allChecked && items.length > 0) {
            setChecked(true)
        }
        else {
            setChecked(false)
        }
    }, [items])
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

    const yesCheck = () => {
        setItems(
            items.map((item) => {
                item.checked = true
                // setChecked(true)
                return item
            })
        )
    }
    const noCheck = () => {
        setItems(
            items.map((item) => {
                setChecked(false)
                item.checked = false
                return item
            })
        )
    }
    // const onKeyDown = () => {
    //     addItem(text)
    // }
    return (
        <Cunteynir>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => { text.length > 0 ? addItem(text) : alert('Но здесь, ведь пусто?!') }}>Добавить<AddBut>+</AddBut></button>
            <button onClick={() => delOnCheck()}>Удалить выделиные <DelBut>x</DelBut></button>
            <button onClick={() => checked == false ? yesCheck() : noCheck()}>отметить всё <Checkbox type="checkbox" checked={checked} /></button>
            {/* <div onKeyPress={addItem(text)}></div> */}
            {items.length > 0 && (
                <Proc>{Math.trunc(checkedCount / (items.length) * 100)}{'%'}</Proc>
            )}

            {items.map((x, index) => {
                return (
                    <div>
                        {index + 1})
                        <input type="checkbox" checked={x.checked} onChange={() => onCheck(index)} />
                        {x.text}
                        <DelBut onClick={() => handleDelete(index)}>x</DelBut>
                    </div >
                )
            })}
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
                transform:scale(1.1);
                
            `
const NumInd = styled.div`
    color: #3512cd;
`
const Proc = styled.div`
    font-size: 50px;
    color: #0bcdeb

`
const Checkbox = styled.input` 
transform:scale(1.8);
`
const AddBut = styled.button`
    background-color: #028200;
    border-radius:69px;
    color:#ff0000;
    border-color:#ff0000;
    transform:scale(1.1);
    font-size:120%;
`

function index(index: any): void {
    throw new Error('Function not implemented.')
}
