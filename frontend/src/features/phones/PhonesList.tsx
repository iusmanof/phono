import React, { useState } from 'react'
import { IPhonesState } from '../../interfaces/IPhoneState'
import { useGetPhonesQuery, usePostPhoneMutation, usePatchPhoneMutation, useDeletePhoneMutation } from '../api/phonesApi'

function PhoneList() {
    // const defaultImputPhone = {
    //     id: 0,
    //     inches: 0,
    //     price: '',
    //     color: '',
    //     type: '',
    //     raiting: 0,
    //     urlImage: ''
    // }
    // const [addNewPhone, response] = usePostPhoneMutation()
    // const [deletePhone] = useDeletePhoneMutation()
    // const [inputField, setInputField] = useState(defaultImputPhone)

    // // const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputsHandler = (e: any) => {
    //     setInputField((prev) => ({
    //         ...prev,
    //         [e.target.name]: e.target.value,
    //     }))
    // }
    // const [updatePhone, { isLoading: isUpdating }] = usePatchPhoneMutation()
    // const setPhoneData = (data: IPhonesState) => {
    //     setInputField({
    //         id: data.id,
    //         inches: data.inches,
    //         price: data.price,
    //         color: data.color,
    //         type: data.type,
    //         raiting: data.raiting,
    //         urlImage: data.urlImage
    //     })
    // }

    // const onEditData = (data: any) => {
    //     updatePhone({
    //         id: inputField.id,
    //         inches: inputField.inches,
    //         price: inputField.price,
    //         color: inputField.color,
    //         type: inputField.type,
    //         raiting: inputField.raiting,
    //         urlImage: inputField.urlImage
    //     });
    //     setInputField(defaultImputPhone)
    // }

    // // const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    // const onSubmit = (e: any) => {
    //     e.preventDefault()
    //     const { inches, price, color, type, raiting, urlImage } = e.target.elements
    //     setInputField((inputField) => ({
    //         ...inputField,
    //         [e.target.name]: e.target.value,
    //     })
    //     )
    //     let formData = {
    //         inches: inches.value,
    //         price: price.value,
    //         color: color.value,
    //         type: type.value,
    //         raiting: raiting.value,
    //         urlImage: urlImage.value
    //     }

    //     addNewPhone(formData)
    //         .unwrap()
    //         .then(() => {
    //             setInputField(() => (defaultImputPhone))
    //         })
    //         .then((error) => {
    //             console.log(error)
    //         })
    // }

    const {
        data: phones,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError,
    } = useGetPhonesQuery({ refetchOnMountOrArgChange: true })

    // let postContent
    // if (isGetLoading) {
    //     postContent = (
    //         <div><span>Loading...</span></div>
    //     )
    // } else if (isGetSuccess) {
    //     postContent = phones.map((phoneItem: IPhonesState) => {
    //         return (
    //             <li key={phoneItem.id}>
    //                 <div>Inches: {phoneItem.inches}</div>
    //                 <div>Price: {phoneItem.price}</div>
    //                 <div>Raiting: {phoneItem.raiting}</div>
    //                 <div>Type: {phoneItem.type}</div>
    //                 <div>URL image: {phoneItem.urlImage}</div>
    //                 <div>Color {phoneItem.color}</div>
    //                 <button onClick={() => deletePhone(phoneItem.id)}> Delete </button>
    //                 <button onClick={() => setPhoneData(phoneItem)}>Edit</button>
    //             </li>
    //         )
    //     })
    // } else if (isGetError) {
    //     postContent = (
    //         <> {getError} </>
    //     )
    // }



    return (
        <div>
            PhoneList
            {JSON.stringify(phones)}
            {/* <form onSubmit={onSubmit}>
                <label><strong>Enter phone params:</strong></label>
                <input
                    value={inputField.inches}
                    type="text"
                    name="inches"
                    id="inches"
                    onChange={inputsHandler}
                />
                <input
                    value={inputField.price}
                    type="text"
                    name="price"
                    id="price"
                    onChange={inputsHandler}
                />
                <input
                    value={inputField.color}
                    type="text"
                    name="color"
                    id="color"
                    onChange={inputsHandler}
                />
                <input
                    value={inputField.type}
                    type="text"
                    name="type"
                    id="type"
                    onChange={inputsHandler}
                />
                <input
                    value={inputField.raiting}
                    type="text"
                    name="raiting"
                    id="raiting"
                    onChange={inputsHandler}
                />
                <textarea
                    value={inputField.urlImage}
                    name="body"
                    id="urlImage"
                    onChange={inputsHandler}
                ></textarea>
                <button type="submit">Submit</button>
                <button onClick={onEditData} type="button">Update</button>
            </form>
            {postContent} */}
        </div>
    )
}


export default PhoneList