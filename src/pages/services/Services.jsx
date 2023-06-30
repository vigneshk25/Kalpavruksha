import React,{useEffect} from 'react';
import './services.css';
import Header from '../../components/Header.jsx';
import headerImg from '../../imgs/img1.png';
import ser from '../../imgs/setone.jpg';
import ser2 from '../../imgs/settwo.jpg';

const Services = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <>
      <Header title='Our Services' image={headerImg}>
            Kalpavruksha offers "Exceptional care and a warm community for a fulfilling retirement. Embrace worry-free living in a personalized, home-like environment."
        </Header>


      <section className='serv_bor'  data-aos="fade-right" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section">
          <img src={ser} alt="" />
          <p>Geriatric Care:
            Geriatric care focuses on the health and well-being of elderly individuals, providing specialized medical attention and support tailored to their unique needs. This comprehensive approach addresses age-related conditions, promotes healthy aging, and ensures optimal quality of life for older adults.</p>
        </div>
      </section>


      <section className='serv_bors' data-aos="fade-left" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section_two"  >
          
          <p>With our post-medication insurance coverage, we ensure that you have continued access to healthcare support after treatment. Our comprehensive insurance plans cover post-treatment healthcare needs, including medication follow-up and post-procedure care. You can have peace of mind knowing that your healthcare expenses are covered even after the initial treatment is complete. Experience the reassurance of ongoing coverage and support for your post-medication needs with our insurance plans.</p>
          <img src={ser2} alt="" />
        </div>
      </section>

      
      <section className='serv_bor'   data-aos="fade-right" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section">
          <img src={ser} alt="" />
          <p>Our palliative care and hospice services provide compassionate end-of-life care, offering comfort and support during challenging times. Our dedicated team is committed to providing holistic palliative support to manage pain and symptoms, ensuring the highest quality of life possible. With our specialized hospice services, we offer comprehensive care tailored to the unique needs of individuals facing terminal illnesses. Trust us to provide compassionate and dignified care for your loved ones when they need it the most.</p>
        </div>
      </section>


      <section  className='serv_bors' data-aos="fade-left" data-aos-delay="200"  data-aos-duration="2000">
        <div className="services_section_two"  >
          
          <p>we offer expert physical therapy and rehab services to support post-injury recovery and enhance mobility. Our team of skilled professionals is dedicated to helping individuals regain strength, improve flexibility, and restore functionality. With personalized treatment plans and state-of-the-art facilities, we are committed to facilitating a successful rehabilitation journey. Experience comprehensive care and tailored programs designed to optimize your physical well-being.</p>
          <img src={ser2} alt="" />
        </div>
      </section>
    </>
  )
}

export default Services