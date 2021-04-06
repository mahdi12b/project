import React from 'react'
import {Form} from 'react-bootstrap'



import './Search.css'


const SearchByName = ({setSearch}) => {
    
    return (
        <div>
                <Form.Control className='InputSearch' type="text" placeholder="Search"  onChange={e=>setSearch(e.target.value)} />
        </div>
    )
}

export default SearchByName