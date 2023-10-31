import React, { useState } from 'react'
import Bredcrumb from '../Components/Bredcrumb/Bredcrumb'
import ProductCard from '../Components/TopProducts/ProductCard'
import { FiFilter } from 'react-icons/fi'
import Pagination from '../Components/Pagination/Pagination'
import ProductsDB from '../ProductsDB'
import Layout from '../Components/Layout/Layout'

const Store = () => {
  const [products, setProducts] = useState(ProductsDB)
  return (
    <Layout>
      <Bredcrumb title={'Store'} />
      <section className='px-14'>

        <div className='filterw-wrapper flex justify-between mt-10 mb-8'>
          <div>
            <select name="category" id="category" className='border border-black rounded p-2'>
              <option value="">Select Category</option>
              <option value="category-1">category-1</option>
              <option value="category-1">category-1</option>
              <option value="category-1">category-1</option>
              <option value="category-1">category-1</option>
            </select>
          </div>
          <div>
            <select name="category" id="category" className='border border-black rounded p-2'>
              <option value="">Select Category</option>
              <option value="category-1">category-1</option>
              <option value="category-1">category-1</option>
              <option value="category-1">category-1</option>
              <option value="category-1">category-1</option>
            </select>
          </div>
        </div>
        <div className="product-wrapper grid md:grid-cols-3 grid-cols-3 md:gap-16">
          {
            products.map((elem, index) => {
              return (
                <ProductCard
                  key={index}
                  img={elem.image}
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