import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import { useNavigate, useParams } from 'react-router-dom';

const Updatedproducts = () => {
    const [id, setid] = useState('')
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState('');
    const params = useParams()
    const navigate = useNavigate()

    // //delete a product
    const handleDelete = async () => {
        try {
            await axios.delete(
                `/product/delete-product/${id}`
            );
            toast.success("Product Deleted Successfully");
            navigate("/admin/product");
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    //single product fetched
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/product/get-product/${params.slug}`)
            setName(data.products.name)
            setCategory(data.products.category)
            setDescription(data.products.description)
            setid(data.products._id)
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {
        getSingleProduct()
        //eslint-disable-next-line
    }, [])


    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/product/update-product/${id}`, {
                name,
                category,
                description,
            })
            if (res?.data?.success) {
                toast.success(res?.data?.message)
                navigate('/admin/product')
            } else {
                toast.error(res?.data?.message)
            }
        } catch (error) {
            console.error('An error occurred while createProduct in:', error);
        }
    };
    return (
        <>
            <section className="h-screen">
                <div className="grid grid-cols-4 h-screen">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="col-span-3">
                        <h1 className="text-4xl my-6 font-bold text-center">Update Products</h1>
                        <form
                            className="max-w-[600px] h-auto bg-white  shadow-sm p-4 rounded-sm mx-auto"
                            onSubmit={handleUpdate}
                            encType="multipart/form-data"
                            method="POST"
                        >
                            <div className="mb-4">
                                <label htmlFor="name" className="text-xl font-semibold mb-1">
                                    Product Name
                                </label>{" "}
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="p-2 bg-slate-800 w-full text-slate-100"
                                    placeholder="Enter product name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="category" className="text-xl font-semibold mb-1">
                                    Product Category
                                </label>{" "}
                                <br />
                                <select name="category"
                                    id="category"
                                    className="p-2 bg-slate-800 w-full text-slate-100 text-lg"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}>
                                    <option >Select Category</option>
                                    <option value="fruit">Fruit</option>
                                    <option value="nut">Nut</option>
                                    <option value="crop">Crops</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="text-xl font-semibold mb-1">
                                    Product Description
                                </label>{" "}
                                <br />
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="p-2 bg-slate-800 w-full text-slate-100"
                                    placeholder="Enter product description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="image" className="text-xl font-semibold mb-1">
                                    Product Image
                                </label>{" "}
                            </div>
                            <div className="mb-4">
                                <label className="p-2 bg-slate-800 w-full text-slate-100">
                                    {photo ? photo.name : "Upload Image"}
                                    <input type="file" name="photo" accept="image/*" onChange={(e) => { setPhoto(e.target.files[0]) }} hidden />
                                </label>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="text-lg font-bold bg-yellow-400 w-full p-2 rounded hover-bg-yellow-600 duration-300">
                                    Update Product
                                </button>

                            </div>
                        </form>
                        <button type="buttom" onClick={handleDelete} className="text-lg font-bold bg-yellow-400 w-full p-2 rounded hover-bg-yellow-600 duration-300">
                            Delete Product
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Updatedproducts
