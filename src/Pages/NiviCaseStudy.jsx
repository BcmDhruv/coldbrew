import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import ServiceProvided from '../Components/ServiceProvided';
import serviceImg from '/Nivi/Nivi-Services.png';

const NiviCaseStudy = () => {
    const chaloImages = [
    "/Nivi/nivi1.jpg",
    "/Nivi/nivi2.jpg",
    "/Nivi/nivi3.jpg",
    "/Nivi/nivi4.jpg",
    "/Nivi/nivi5.jpg",
    "/Nivi/nivi6.jpg",
    "/Nivi/nivi7.jpg",
    "/Nivi/nivi8.jpg",
    "/Nivi/nivi9.jpg"
];

  return (
    <>
    <ServiceProvided image={serviceImg}  />
    
    <ImageGrid images={chaloImages} />
    </>
  )
}

export default NiviCaseStudy