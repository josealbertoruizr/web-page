// Here we are importing all the components and containers from the index.js folders
import { Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './containers';

// All the styles from the app
import './App.css';

// Finish the website on dec 15 2023 

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
