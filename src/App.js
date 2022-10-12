import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const articleHeader = {
    color: 'salmon',
    textAlign: 'center',
    marginTop: '0px',
  }
  return (
    <div className="App">
      <Mobile></Mobile>
      <h2>Blogs</h2>
      <article className='blog'>
        <h2 style={articleHeader}>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis tenetur nobis facere ipsa sapiente error ipsam eligendi eos aperiam maxime quia, repellendus tempora animi! Facilis ab assumenda voluptas repellendus.</p>
      </article>

      <Blog author='Rahim Uddin' heading="Rahim's Blog"></Blog>
      <Blog author='Kabir Sing' heading='Kabirs Blog'></Blog>
      <Blog author='Sonia' heading="Sonia's Blog"></Blog>
    </div>
  );
}

function Mobile() {
  const [battery, setBattery] = useState(100);
  const DecreaseBattery = () => {
    if (battery === 0) {
      return;
    }
    setBattery(battery - 10);
  }
  return (
    <div>
      <h3>{battery}%</h3>
      <button onClick={DecreaseBattery}>Battery Down</button>
    </div>
  )
}

function Blog(props) {
  return (
    <div style={{ textAlign: 'center' }} className='blog'>
      <h2>Heading: {props.heading}</h2>
      <h5>Author Name: {props.author}</h5>
    </div>
  )
}

export default App;
