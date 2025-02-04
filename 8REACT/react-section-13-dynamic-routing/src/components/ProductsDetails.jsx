import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetails = () => {

    const {productsname} = useParams();
    const navigate = useNavigate();



  return (
    <div className="w-1/2 mx-auto my-5">
      <h2 className="w-full text-center text-2xl font-semibold text-yellow-600">
        Details of :  {productsname.toUpperCase()}
      </h2>
      <p className="w-full text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa
        aut veniam dignissimos magni cumque accusantium est at id porro
        molestias molestiae praesentium exercitationem rem sed, libero inventore
        magnam iste. At sint deleniti nihil cupiditate pariatur hic animi dicta
        numquam veniam consequatur vero dolores labore sit, dolorum possimus
        ipsum distinctio ipsam ab modi ut molestiae rerum? Dolores repellat
        voluptatum dolor laborum eaque. Quaerat maiores cumque, asperiores
        facilis nulla consequuntur. Rerum provident{" "}
      </p>
      <button onClick={() => navigate('/products')} className="px-3 py-2 rounded-lg bg-yellow-600 text-white mt-5">
        Go Back
      </button>
    </div>
  );
};

export default ProductsDetails;
