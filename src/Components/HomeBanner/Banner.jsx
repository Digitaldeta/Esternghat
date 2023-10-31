import React from 'react'
import FreeDelivery from '../../images/free-delivery.png'
import SecurePayment from '../../images/credit-card.png'
import Quality from '../../images/quality.png'
import CustomerService from '../../images/head-phone.png'

const Banner = () => {
  return (
  <>
  <div className="grid lg:grid-cols-4 grid-cols-2 gap-12 py-8 my-8 border-b">
    <div className='text-center border-l'>
        <img src={FreeDelivery} alt="deliver" className='w-16 mx-auto'/>
        <h2 className='text-xl font-semibold mt-2'>Free <br /> Shipping</h2>
    </div>
    <div className='text-center border-l'>
        <img src={SecurePayment} alt="deliver" className='w-16 mx-auto'/>
        <h2 className='text-xl font-semibold mt-2'>Secure <br /> Payment</h2>
    </div>
    <div className='text-center border-l'>
        <img src={Quality} alt="deliver" className='w-16 mx-auto'/>
        <h2 className='text-xl font-semibold mt-2'>Quality <br /> Guarantee </h2>
    </div>
    <div className='text-center border-l'>
        <img src={CustomerService} alt="deliver" className='w-16 mx-auto'/>
        <h2 className='text-xl font-semibold mt-2'>Costumer <br /> Service</h2>
    </div>
  </div>
  </>
  )
}

export default Banner