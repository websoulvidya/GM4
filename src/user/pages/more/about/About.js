import React from 'react';
import Homeheader from '../../../components/homeheader/Homeheader';
import Footer from '../../../components/footer/Footer';
import a_image1 from '../../../assets/about_us assets/pubg-about1.jpg';
import a_image2 from '../../../assets/about_us assets/262886-pubg-game-wallpaper (1).jpg'
import './About.css';
function About() {
  return (
    <div>
      <Homeheader/>
        <section className='about-us__heading'>
          {/* Banner Image and headdings are given inside section 'about-us _heading' */}
          <div className='about-us__heading-div1'  >
            <div className='about-us__heading-img1'>
              <img src={a_image1} alt='pubg'></img>
            </div>
            <div className='about-us__heading-content1'>
              <p className='about-p1'>About Us</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti laborum ea ipsa repellendus impedit tempore voluptates consequatur provident, fugiat odit! Error eligendi amet quis labore id exercitationem, non eius temporibus?</p>
            </div> 
          </div>
        </section>
        <section className='about-us__main-content1'>
          <div className='about-us__main-content1__row1'>
            {/* Image for 1st row is given here*/}
            <div className='about-us__main-content1__col1a'>
              <img src={a_image2} alt='pubg'></img>
            </div>
            {/* Text block for 1st row is given here*/}
            <div className='about-us__main-content1__col1b'>
                <h2>Heading1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius voluptatem laboriosam quidem illo vitae quia, veritatis aperiam assumenda quam quaerat numquam quod quos at distinctio ad nostrum odio doloribus?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias! Neque aperiam corporis labore voluptatibus cum architecto dolores iste quaerat cumque quam magni aut et, molestiae saepe quo quas omnis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias! Neque aperiam corporis labore voluptatibus cum architecto dolores iste quaerat cumque quam magni aut et, molestiae saepe quo quas omnis.</p>
            </div>
          </div>
          <div className='about-us__main-content1__row2'>
            {/* Text block for 2nd row is given here*/}
            <div className='about-us__main-content1__col2a'>
                <h2>Heading2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius voluptatem laboriosam quidem illo vitae quia, veritatis aperiam assumenda quam quaerat numquam quod quos at distinctio ad nostrum odio doloribus?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias! Neque aperiam corporis labore voluptatibus cum architecto dolores iste quaerat cumque quam magni aut et, molestiae saepe quo quas omnis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias! Neque aperiam corporis labore voluptatibus cum architecto dolores iste quaerat cumque quam magni aut et, molestiae saepe quo quas omnis.</p>
            </div>
            {/* Text block for 2nd row is given in the 'about-us__main-content1__col2b' div*/}
            <div className='about-us__main-content1__col2b'>
                <img src={a_image2} alt='pubg'></img>
            </div>
          </div>
          <div className='about-us__main-content1__row3'>
            {/* Image block for 3rd row is given here */}
            <div className='about-us__main-content1__col3a'>
                <img src={a_image2} alt='pubg'></img>
            </div>
            {/* Text block for 2nd row is given in the 'about-us__main-content1__col3b' div*/}
            <div className='about-us__main-content1__col3b'>
                <h2>Heading3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius voluptatem laboriosam quidem illo vitae quia, veritatis aperiam assumenda quam quaerat numquam quod quos at distinctio ad nostrum odio doloribus?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias! Neque aperiam corporis labore voluptatibus cum architecto dolores iste quaerat cumque quam magni aut et, molestiae saepe quo quas omnis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias! Neque aperiam corporis labore voluptatibus cum architecto dolores iste quaerat cumque quam magni aut et, molestiae saepe quo quas omnis.</p>
            </div>
          </div>
        </section>
      <Footer /> 
    </div>
  )
}

export default About
