import React from "react";
import Bredcrumb from "../Components/Bredcrumb/Bredcrumb";
import Mango from "../images/Products/mango.jpg";

const ProductEnquiry = () => {
  return (
    <>
      <Bredcrumb title={"Product Enquiry"} />
      <div className="product-enquiry my-14 px-14">
        <div className="flex gap-14 h-screen">
          <div className="img-wrapper border sticky top-0 w-1/3 bg-red-600">
            <img src={Mango} alt="Mango" className=""/>
          </div>
          <div className="enquiry-form border w-1/2 bg-green-800 ">
                {/* <h2 className="title">Fresh Mango Fruit</h2>
                  <h3 className="category">Fruits</h3>
                  <p className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam delectus voluptatibus nesciunt nihil provident, quaerat eaque est maiores laudantium nostrum a repudiandae commodi enim? Aut possimus officiis quibusdam totam optio, consectetur delectus repellat repudiandae. Voluptas quas, non est perferendis voluptatem repellendus a eaque omnis eum incidunt et voluptatibus praesentium!
                  </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEnquiry;
