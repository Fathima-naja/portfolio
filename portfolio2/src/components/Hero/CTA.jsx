import React from 'react'
import CV from './cv.pdf'

export const CTA = () => {
  return (
    <div className='cta'> 
<span >
    <a href={CV} className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </span>
    </div>
  )
}
export default CTA
