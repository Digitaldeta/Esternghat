import Bredcrumb from '../Components/Bredcrumb/Bredcrumb'
import ProductCard from '../Components/TopProducts/ProductCard'
import Pagination from '../Components/Pagination/Pagination'
import Layout from '../Components/Layout/Layout'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import img from '../images/Products/mango.jpg'

const Store = () => {
  const [product, setProduct] = useState([])
  

  const getAllProduct = async (req, res) => {
    try {
        const res = await axios.get('/product/get-product')
        setProduct(res.data.products);
       
    } catch (error) {
        toast.error("Something Went Wrong")
    }
}

useEffect(() => {
    getAllProduct()
}, [])

  return (
    <Layout>
      <Bredcrumb title={'Store'} />
      <section className='px-14'>

        <div className='filterw-wrapper flex justify-between mt-10 mb-8'>
         
          <div>
            <select name="category" id="category" className='border border-black rounded p-2'>
              <option value="">Select Category</option>
              <option value="fruit">Fruits</option>
              <option value="nut">Nuts</option>
              <option value="crop">Crops</option>
            </select>
          </div>
        </div>
        <div className="product-wrapper grid md:grid-cols-3 grid-cols-3 md:gap-16">
          {
            product.map((elem, index) => {
              return (
                <ProductCard
                  key={index}
                  img={img}
                  name={elem.title}
                  category={elem.category}
                  desciption={elem.description}
                />
              )
            })
          }
        </div>

        <section className="pagination-section">
          <Pagination />
        </section>

      </section>

    </Layout>
  )
}

export default Store