import React from 'react'
import Bredcrumb from '../Components/Bredcrumb/Bredcrumb'
import Layout from '../Components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <Bredcrumb title={'Contact Us'} />
      <section className="contact-page md:px-9 px-4  ">
        <div className='md:my-24 my-8'>
          <div className='md:p-4 rounded-lg flex lg:flex-nowrap flex-wrap md:gap-6 gap-3'>
            <div className='md:w-1/2 w-full'>
              <h1 className='md:text-3xl text-2xl fon-bold mb-4 text-slate-800'>Contact Information</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi adipisci consectetur non doloribus atque ab voluptatum quibusdam iusto quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex numquam id quod. Eligendi sapiente doloribus sit ipsam quam tenetur.</p>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, est.</p>

            </div>
            <div className=' text-white md:w-1/2 w-full h-fit'>
              <h1 className="contact-form md:text-3xl text-2xl font-bold text-center mb-4 text-slate-800">Contact Form</h1>
              <form className='px-6 py-8 bg-slate-700'>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <input type="text" name="name" id="name" placeholder='Enter your fullname' className='focus-visible:outline-none border-gray-800 bg-slate-600 p-2 md:text-lg shadow-md w-full' />
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder='Enter your email address' className='focus-visible:outline-none border-gray-800 bg-slate-600 p-2 md:text-lg shadow-md w-full' />
                  </div>
                  <div className="md:col-span-2">
                    <textarea name="message" id="message" cols="30" placeholder='Message' className='focus-visible:outline-none border-gray-800 bg-slate-600 p-2 md:text-lg shadow-md w-full'></textarea>
                  </div>
                </div>
                <div className='flex justify-center items-center w-full mt-4'>
                  <button className='bg-yellow-500 md:px-4 md:py-2 p-2 rounded'>Sent Message</button>
                </div>
              </form>
            </div>

          </div>
          <div className="w-full md:mt-10 mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.66728275246!2d85.65563768586406!3d20.301129049751108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1697879020675!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Contact