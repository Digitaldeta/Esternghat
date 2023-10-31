import React from 'react'
import { Link } from 'react-router-dom'

const EnquiryBtn = () => {
  return (
    <>
     <Link to='/product-details' className="px-3 py-2 border bg-yellow-600 hover:bg-slate-900 duration-500 rounded-md text-white">Enquiry Now</Link>
    </>
  )
}

export default EnquiryBtn