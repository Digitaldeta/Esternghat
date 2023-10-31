import React from "react";
import Carousel from "react-multi-carousel";
import ProductCard from "../Components/TopProducts/ProductCard";
import Newsletter from "../Components/Newsletter/Newsletter";
import Banner from "../Components/HomeBanner/Banner";
import BlogCard from "../Components/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from 'react-icons/bi'
import ProductsDB from "../ProductsDB";
import Layout from "../Components/Layout/Layout";
import HomeCarousel from '../Components/HomeCasousel/HomeCarousel'
import ScrollToTopbtn from "../Components/ScrollToTopbtn";

const HomePage = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1330 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1330, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 2,
    },
  };
  return (
    <Layout>
      <ScrollToTopbtn/>
      <section>
        <HomeCarousel/>
      </section>
      <section className="top-products md:px-14 px-4 my-10">
        {/* ==============Top Products============= */}
        <div className="mt-14">
          <div className="mt-10 flex justify-between items-center mb-2">
            <h2 className="md:text-4xl text-2xl font-bold text-slate-800">Top Products</h2>
            <Link to='/store' className="text-lg font-semibold">View All <BiSolidRightArrow className="inline" /></Link>
          </div>
          <Carousel
            responsive={responsive}
          >
            {
              ProductsDB.map((elem, index) => {
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
          </Carousel>
        </div>
        {/* ==================Fruits============= */}
        <div className="mt-10 flex justify-between items-center mb-2">
          <h2 className="md:text-4xl text-2xl font-bold text-slate-800">Fresh Fruits</h2>
          <Link to='/store' className="text-lg font-semibold">View All<BiSolidRightArrow className="inline" /></Link>
        </div>
        <Carousel
          responsive={responsive}
        >
          {
            ProductsDB.map((elem, index) => {
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
        </Carousel>

      </section>

      <section>
        <Newsletter />
      </section>

      <section className="my-20">
        <div>
          <h2 className="text-4xl font-bold text-center"> Our Latest Blogs</h2>
        </div>
        <div className="blog-wrapper md:px-14 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-14 mt-8 justify-center items-center">

          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

      </section>
      <section className="py-10 shadow-lg my-10">
        <Banner />
      </section>
    </Layout>
  );
};

export default HomePage;
