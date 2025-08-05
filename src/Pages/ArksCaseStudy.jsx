import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import ArksHero from '../Components/ArksHero'
import FAQs from '../Components/FAQs'
import AdsCreated from '../Components/AdsCreated'
import ServiceProvided from '../Components/ServiceProvided'
import serviceImg from '/Arks/Arks-Services.png';

const ArksCaseStudy = () => {
  const imageUrls = [
    "/Arks/IMAGE_01.png",
    "/Arks/IMAGE_02.png",
    "/Arks/IMAGE_03.png"
  ];
  return (
    <>
    <ArksHero />
    <ServiceProvided image={serviceImg} />
    <AdsCreated images={imageUrls} />
    <FAQs />
    <ImageGrid />
    </>
  )
}

export default ArksCaseStudy