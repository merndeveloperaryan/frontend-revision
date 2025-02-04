import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import { Link } from "react-router-dom";

const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <div>
        <h2 className="text-4xl text-cyan-400 font-black">Product</h2>
      </div>
      <div className="w-1/2 text-center ">
        <p className="text-teal-400 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          numquam tempora possimus. Ipsam error placeat neque facere hic veniam.
          Animi sed soluta ducimus, sequi velit adipisci provident blanditiis
          facere laboriosam, obcaecati eius porro cupiditate enim molestiae amet
          consequatur harum magnam ipsum cum nemo tempore nobis earum. Error
          accusantium obcaecati nam sed illo at dolorem facilis architecto
          dolores, quia natus corru nt perferendis reprehenderit a quas quasi
          dolorem molestias tempora?
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-4 px-5">
        {products &&
          products.map(({ title, id }) => (
            <Link
              key={id}
              to={`/product/${id}`}
              className="w-32 p-4 rounded bg-teal-100 text-teal-500 text-xs cursor-pointer hover:bg-teal-200 transition-all duration-300 hover:text-teal-800"
            >
              {title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Product;
