import {Link} from 'react-router-dom';
import React from 'react';
import './notfound.css';


const Notfound = () => {
  return (
    <section>
      <div className="container notfound_con">
        <h2>Page Not Found</h2>
        <Link to='/' className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default Notfound