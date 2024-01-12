import React from 'react'

function Main() {
  return (
    <div  className='main--div'>
        <div className='img-div'>
            <img className='image' src="https://media.islamicity.org/wp-content/uploads/2021/04/iStock-840887390.jpg" alt="image" />
        </div>
        <div className='title'>
            <h1>Al-Murtuza</h1>
            <h1>Hajj & Umarah</h1>
        </div>
        <div className="landing-page">
      <header>
        <h1>Welcome to Al-Murtuza</h1>
        <p>Your Trusted Partner for an Unforgettable Hajj Experience</p>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Al-Murtuza is dedicated to providing a seamless and spiritually enriching Hajj experience.
          With years of expertise, we ensure that your pilgrimage is filled with comfort, guidance, and memorable moments.
        </p>
      </section>

      

      <section className="why-choose-us">
        <h2>Why Choose Al-Murtuza?</h2>
        <ul>
          <li>Experienced and Knowledgeable Guides</li>
          <li>Luxurious Accommodations</li>
          <li>24/7 Customer Support</li>
          <li>Customizable Packages</li>
          {/* Add more points as needed */}
        </ul>
      </section>

      
    </div>
    </div>
  )
}

export default Main