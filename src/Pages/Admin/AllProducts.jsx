import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ProductCard from './Card/ProductCard'
import Layout from '../../Components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from 'axios'
import img from '../../images/Products/mango.jpg'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [totalProduct, setTotalProduct] = useState()

    const getAllProduct = async (req, res) => {
        try {
            const res = await axios.get('/product/get-product')
            setProducts(res.data.products);
            setTotalProduct(res.data.totalProducts
            )
        } catch (error) {
            toast.error("Something Went Wrong")
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [])
    return (
        <Layout>
            <section className='h-screen'>
                <div className='grid grid-cols-4 h-screen'>
                    <div>
                        <Sidebar />
                    </div>
                    <div className='col-span-3 p-4 flex gap-8 flex-wrap'>
                        <h1 className='w-full text-3xl'>Total product in Store : {totalProduct}</h1>
                        {
                            products.map((elem, index) => {
                                return (
                                    <Link key={index} to={`${elem.slug}`}>
                                        <ProductCard
                                            img={img}
                                            name={elem.name}
                                            category={elem.category}
                                            description={elem.description}
                                            id={elem._id}
                                        />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AllProducts