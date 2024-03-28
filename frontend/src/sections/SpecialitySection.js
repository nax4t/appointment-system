import React from 'react'

const SpecialitySection = () => {
  return (
    <section className='spaciality-section'>
      <div className='headings'>
        <h2 className='heading-two'>Liver or Stomach Issue?</h2>
        <h5 className='heading-five'>Get Relief Today</h5>
      </div>

      <div className='specialities'>
        <div className='stomach'>
          <img className='organ-image' src='./assets/stomach.png'></img>
          <h3 className='heading-three'>Digestive Care</h3>
          <ul className='points'>
            <li className='point'>Specialized</li>
            <li className='point'>Trusted</li>
          </ul>
        </div>
        <div className='liver'>
          <img className='organ-image' src='./assets/liver.png'></img>
          <h3 className='heading-three'>Hepatitis Remedy</h3>
          <ul className='points'>
            <li className='point'>A, B and C Specialized</li>
            <li className='point'>Pesonalized Treatment</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SpecialitySection
