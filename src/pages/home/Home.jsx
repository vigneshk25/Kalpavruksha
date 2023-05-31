import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import Image from '../../imgs/v204_725.png';
import MainHeader from '../../components/MainHeader';
import icon from '../../imgs/icon.png'
import img1 from '../../imgs/img1.png'



const Home = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
            <h1>Bringing Smiles to People’s Faces</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,</p>


        </div>
        <div className="main__header-right">
          <div className="main__cricle">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home