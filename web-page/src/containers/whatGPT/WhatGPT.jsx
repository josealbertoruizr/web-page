import React from 'react'
import './WhatGPT.css'
import  Feature  from '../../components/feature/Feature'

const WhatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin ' id = "wgpt3">
      <div className='gpt3_whatgpt3-feature'>
        <Feature title = "What is gpt" text = 'You can now create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.'/>
      </div>
      
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title = "ChatBots" text = 'We’re rolling out custom versions of ChatGPT that you can create for a specific purpose—called GPTs. GPTs are a new way for anyone to create a tailored version of ChatGPT to be more helpful in their daily life, at specific tasks, at work, or at home'/>
        <Feature title = "Store" text = 'Starting today, you can create GPTs and share them publicly. Later this month, we’re launching the GPT Store, featuring creations by verified builders. '/>
        <Feature title = "Privacy and Safety" text = 'As always, you are in control of your data with ChatGPT. Your chats with GPTs are not shared with builders. If a GPT uses third party APIs, you choose whether data can be sent to that API.  '/>
      </div>
    </div>
  )
}

export default WhatGPT