import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => (
  
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with BlockChain and OpenAI </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipiscing elit praesent enim iaculis sed, sapien facilisis sociis tellus sociosqu nisi habitasse aliquam penatibus urna, magna aenean sem quis imperdiet curabitur potenti placerat cubilia netus. Penatibus malesuada sodales tortor integer sollicitudin quam urna consequat neque, tempor facilisis nisl elementum posuere in laoreet litora sociis, etiam vestibulum vel sed</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address'></input>
          <button type='button'>Get Started</button>
        </div>
        
        <div className='gpt3__header-content-people'>
          <img src={people}
            alt='people' />
            <p>1,600 requested access in the last 24 hours</p>
        </div>
    </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
      </div>
    </div>
);


export default Header