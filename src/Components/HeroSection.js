import React from 'react'
import { Button } from './Button';
import background from './Images/BGDown.png'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
      <div className='hero-container'>
          <img src={background} alt='Background Down ' className='background' />
          <div className='start-box'>
            <h1 className='text-title'>Panic Disorder</h1>
          <p className='text-subtitle'>Panic Disorder discription</p>
          <div>
              <Link to='/Screening' className='btn-start'>Start</Link>
          </div>  
          </div>

    </div>
  )
}

export default HeroSection
