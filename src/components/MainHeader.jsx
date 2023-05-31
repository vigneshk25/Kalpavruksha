import React from 'react'
import {Link} from 'react-router-dom'
import Logo1 from '../../src/imgs/v204_725.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">

        <div className="main__header-left">
          <h1>Bringing Smiles to People’s Faces</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat suscipit provident quod assumenda, inventore illo.</p>
          <Link to='/services' className='btn lg' >Get Started</Link>
        </div>

        <div className="main__header-right">
          <div className="main_header-cricle">
            <div className="main_header-image">
            <img src={Logo1} alt="main header image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader