import React from 'react'
import './WhatGPT.css'
import  Feature  from '../../components/feature/Feature'

const WhatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin ' id = "wgpt3">
      <div className='gpt3_whatgpt3-feature'>
        <Feature />
      </div>
      
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT