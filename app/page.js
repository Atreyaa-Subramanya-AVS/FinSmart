import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Illustration from '@/components/Illustration'
import Nav from '@/components/Nav'
import Feat from '@/components/QnA'
import React from 'react'

const page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Illustration />
      <Feat />
      <Footer />
    </div>
  )
}

export default page