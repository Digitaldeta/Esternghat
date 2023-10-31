import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/product/create-product', {
        name,
        category,
        description,
        photo
      })
      if (res?.data?.success) {
        toast.success(res?.data?.message)
        setName('')
        setCategory('')
        setDescription('')
        setPhoto('')
      } else {
        toast.error(res?.data?.message)
      }
    } catch (error) {
      console.error('An error occurred while createProduct in:', error);
    }
  };

  return (
    <section className="h-screen">
      <div className="grid grid-cols-4 h-screen">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-3">
          <h1 className="text-4xl my-6 font-bold text-center">Add Products</h1>
          <form
            className="max-w-[600px] h-auto bg-white  shadow-sm p-4 rounded-sm mx-auto"
            onSubmit={handleSubmit}
            encType="multipart/form-data" // Make sure this is set
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
                Add New Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
