import React, { useEffect, useState } from 'react'
import { IPhonesState } from '../../interfaces/IPhoneState'
import { useGetPhonesQuery, useLazyFilterByColorQuery, useLazyFilterByPriceQuery,  } from '../api/phonesApi'

function PhoneList() {

    const [phonesData, setPhonesData] = useState([])

    const {
        data: phones,
    } = useGetPhonesQuery({ refetchOnMountOrArgChange: true })
    const [getDataByColor, resultsColor] = useLazyFilterByColorQuery()
    const [getDataByPrice, resultPrice] = useLazyFilterByPriceQuery()

    useEffect(() => {
        if(phones) {
            setPhonesData(phones)
        }
    }, [phones])

    useEffect(() => {
        if( resultsColor && resultsColor.data){
            setPhonesData(resultsColor.data)
        }
    }, [resultsColor])

    useEffect(() => {
        if (resultPrice && resultPrice.data){
            setPhonesData(resultPrice.data)
        }
    }, [resultPrice])

    let currentData = phonesData.map((phoneItem: IPhonesState) => {
        return (
            <li key={phoneItem.id}>
                <div>Inches: {phoneItem.inches}</div>
                <div>Price: {phoneItem.price}</div>
                <div>Raiting: {phoneItem.raiting}</div>
                <div>Type: {phoneItem.type}</div>
                <div>URL image: {phoneItem.urlImage}</div>
                <div>Color {phoneItem.color}</div>
            </li>
        )
    })

    return (
        <div>
            <div>
                <span>sort by price</span>
                <button onClick={() => {getDataByPrice({price_to: 100})}}>less than 100$</button>
                <button onClick={() => {getDataByPrice({price_from: 100, price_to: 200})}}>$100 - $200</button>
                <button onClick={() => {getDataByPrice({price_from: 300, price_to: 400})}}>$300 - $400</button>
                <button onClick={() => {getDataByPrice({price_from: 400})}}>more $400</button>
            </div>
            <div>
                <span>sort by color</span>
                <button onClick={() => getDataByColor('red')}>red</button>
                <button onClick={() => getDataByColor('black')}>black</button>
                <button onClick={() => getDataByColor('green')}>green</button>
                <button onClick={() => getDataByColor('blue')}>blue</button>
                <button onClick={() => getDataByColor('yellow')}>yellow</button>
                <button onClick={() => getDataByColor('purple')}>purple</button>
            </div>
            <hr />

            PhoneList:
            {currentData}
            <hr />
        </div>
    )
}


export default PhoneList