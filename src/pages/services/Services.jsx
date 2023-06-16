import React from 'react';
import './services.css';
import Header from '../../components/Header.jsx';
import headerImg from '../../imgs/img1.png';
import ser from '../../imgs/set.png'



const Services = () => {
  return (
    <>
      <Header title='Our Services' image={headerImg}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odio esse iste ea? Veritatis deleniti repellendus nesciunt delectus vitae distinctio officiis laboriosam. Illo eos deserunt labore corrupti ratione  
      </Header>


      <section className='serv_bor'  data-aos="fade-right" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section">
          <img src={ser} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In explicabo sit quam aliquam. Ipsum, voluptates! Consequatur maiores impedit doloribus ipsam esse quasi veniam doloremque officia hic, delectus optio odit cupiditate?</p>
        </div>
      </section>


      <section className='serv_bors' data-aos="fade-left" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section_two"  >
          
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In explicabo sit quam aliquam. Ipsum, voluptates! Consequatur maiores impedit doloribus ipsam esse quasi veniam doloremque officia hic, delectus optio odit cupiditate?</p>
          <img src={ser} alt="" />
        </div>
      </section>

      
      <section className='serv_bor'   data-aos="fade-right" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section">
          <img src={ser} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In explicabo sit quam aliquam. Ipsum, voluptates! Consequatur maiores impedit doloribus ipsam esse quasi veniam doloremque officia hic, delectus optio odit cupiditate?</p>
        </div>
      </section>


      <section  className='serv_bors' data-aos="fade-left" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section_two"  >
          
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In explicabo sit quam aliquam. Ipsum, voluptates! Consequatur maiores impedit doloribus ipsam esse quasi veniam doloremque officia hic, delectus optio odit cupiditate?</p>
          <img src={ser} alt="" />
        </div>
      </section>
    </>
  )
}

export default Services