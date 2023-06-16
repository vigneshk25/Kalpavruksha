import React from 'react'

const Header = ({title,image,children}) => {
  return (
        <header className='header'>
            <div className="header_container">
                <div className="header_con_bg">
                    <img src={image} alt="" />
                </div>
                <div className="header_content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </header>
  )
}

export default Header