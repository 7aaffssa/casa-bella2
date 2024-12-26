import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import PriceCard from "./PriceCard"
import img from "../images/pricing.jpg"
import "./price.css"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
          <PriceCard />
        </div>
      </section>
      </section>
    </>
  )
}

export default Pricing
