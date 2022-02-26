import React from 'react'
import '../../src/App.css'

const Page = ({ page }) => {
  return (
    <div className='App-header'>
        <h1>{page.title}</h1>
        <h2>{page.subtitle}</h2>
        <p>{page.text}</p>
    </div>
  )
}

export default Page