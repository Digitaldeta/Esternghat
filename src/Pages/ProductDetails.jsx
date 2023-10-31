import React from 'react'
import mango from '../images/Products/mango.jpg'
import Bredcrumb from '../Components/Bredcrumb/Bredcrumb'
import EnquiryDetail from '../Components/Buttons/EnquiryDetail'
import fruit from '../images/Products/avocado.jpg'
import ProductCard from '../Components/TopProducts/ProductCard'
import EnquiryBtn from '../Components/Buttons/EnquiryBtn'
import { Link } from 'react-router-dom'
import { BiSolidRightArrow } from 'react-icons/bi'

const ProductDetails = () => {
  return (
    <>
    <Bredcrumb title={'Product details'}/>
    <section className="md:px-14 px-8">

    <div className="product-details-wrapper my-10 flex flex-wrap gap-8">
        <div className='product-img md:w-1/3 w-full h-fit p-2 bg-white drop-shadow-lg rounded-md group overflow-hidden'>
                <img src={mango} alt="mango"  className='w-full group-hover:scale-125 duration-500'/>
        </div>
        <div className='product-details md:w-3/5 w-full'>
            <h1 className="product-title md:text-5xl font-bold text-slate-700 mb-2">Fresh Mango fruit</h1>
            <h3 className="category text-2xl text-slate-500 font-semibold mb-2">Fresh Mango</h3>
            <div className="flex font-[Roboto] gap-2 items-end mb-2">
          </div>
            <p className="description mb-4 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque magnam temporibus obcaecati enim! Quidem, ab. Neque quisquam autem eveniet saepe delectus facilis placeat, error illum nulla culpa earum ad natus dignissimos, numquam optio eligendi sit alias labore! Sed assumenda autem vero illum, debitis tempora! Quos distinctio adipisci reiciendis nam architecto eligendi harum velit tempora ullam dolores aspernatur assumenda eius est vero optio, cumque repellat a, dignissimos ea sunt voluptates nobis beatae. Velit ipsa doloremque possimus quisquam adipisci a fugiat harum, minima amet exercitationem consequatur totam doloribus quibusdam repudiandae dolorem voluptas necessitatibus est quis itaque repellendus ea pariatur? Excepturi, nulla!</p>
            <div className='my-6 text-lg'>
                <label htmlFor="quantiy" className='text-xl font-semibold'>Select quantiy</label>
                <form action="">
                    <select name="quantityUnit" id="quantityUnit" className='border p-2'>
                        <option value="KG">KG</option>
                        <option value="Quintal">Quintal</option>
                    </select>
                    <input type="text" name="acutalquantity" id="acutalquantity" placeholder='Enter quantity' className='border ms-2 p-2 outline-none'/>
                </form>

            </div>
            <div className=''>
            </div>
        </div>
    </div>

    {/* ============Similar products========== */}

    <section className="similar-products my-14">
    <div className="mt-10 flex justify-between items-center mb-5">
          <h2 className="md:text-4xl text-2xl font-bold text-slate-800">Similar Products </h2>
          <Link to='/store' className="text-lg font-semibold">View All <BiSolidRightArrow className="inline"/></Link>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14'>

        </div>

    </section>

{/* ===============Product Reviews============== */}

<section className="reviews">
    
</section>

    </section>
    </>
  )
}

export default ProductDetails