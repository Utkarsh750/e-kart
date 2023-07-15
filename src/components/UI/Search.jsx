import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const navigate = useNavigate()
    const [search , setSearch] = useState("")

    const handleInput = e => {
        setSearch(e.target.value)
    }

    const handleFormSubmission =  e => {
        e.preventDefault();
        navigate({
            search: `search=${search}`
        })
    }
  return (
    <Fragment>
         <form onSubmit={handleFormSubmission}>
          <input
            name="search"
            type="text"
            id="search"
            placeholder="Enter product name, category"
            value={search}
            onChange={handleInput}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="25"
              height="20"
              viewBox="0 0 24 24"
             strokeWidth="1.7"
              stroke="white"
              fill="none"
              strokeLinecap="round"
             strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="20"
          height="20"
          viewBox="0 0 24 24"
         strokeWidth="1.5"
          stroke="white"
          fill="none"
          strokeLinecap="round"
         strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
    </Fragment>
  )
}

export default SearchBox