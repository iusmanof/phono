import React, { useEffect, useState } from 'react'
import { useGetPhonesQuery } from '../../features/api/phonesApi';
import { IPhonesState } from '../../interfaces/IPhoneState';
import HeaderNavigation from '../HeaderNavigation';
import SearchBar from '../SearchBar';
import './header.css'

function Header() {

const [query, setQuery] = useState("");
const [showSearchResult, setShowSearchResult] = useState(false);

const {
  data: phones,
  isLoading: isGetLoading,
  isSuccess: isGetSuccess,
  isError: isGetError,
  error: getError,
} = useGetPhonesQuery({ refetchOnMountOrArgChange: true })

let postContent
if (isGetLoading) {
  postContent = (
    <div>
       <span >Loading...</span>
    </div>
  )
} else if (isGetSuccess) {
  postContent = phones.data.filter((i: IPhonesState)=> i.type.toLowerCase().includes(query)).map((item: IPhonesState) => {
    return (
      <div key={item.id}>{item.type} {item.color} {item.inches} {item.price} {item.raiting}</div>
    )
  })
}

useEffect(() =>{ if (!query.trim().length) {
  setShowSearchResult(false) 
} }, [query])

  return ( <header>
    {/* <SearchBar /> */}
    <div><input type="text" placeholder='Search ...' onChange={(e) => { 
      setQuery(e.target.value)
      if (!query.trim().length) {
        setShowSearchResult(false) 
      } else {
        setShowSearchResult(true)
      }
    }}/></div>
    <div className='searchContent'>
      {showSearchResult ? postContent : ''}
    </div>
    <HeaderNavigation />
  </header>)
}

export default Header;