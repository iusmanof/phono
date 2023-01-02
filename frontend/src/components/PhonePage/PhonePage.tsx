import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteLastPhone, selectPhone, post } from '../../features/phones/phonesSlice'

function PhonePage() {
    const phonesState = useAppSelector(selectPhone)
    const dispatch = useAppDispatch()
    const [phones, setPhones] = useState(phonesState)
    // console.log(phonesState)
    const phonesElements = phonesState.map( p => {
        return <div key={p.id}>{p.type} {p.color} {p.inches} {p.price} {p.raiting} {p.type} {p.urlImage}</div>
    })
    return (
        <div>
            <h1>PhonePage</h1>
            {phonesElements}
            <button onClick={() => dispatch(post())}>random add</button>
        </div>
    )
}

export default PhonePage