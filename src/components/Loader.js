import spinner  from '../assets/spinner.gif'

import React from 'react'

const Loader = () => {
  return (
    <div className='loader'>
        <img src = {spinner} alt='loading'/>
        <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader;