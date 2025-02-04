import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductProvider";

const ProductDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const { products } = useContext(ProductContext);

  const p = products && products.find((p) => p.id === +id);

  return p ? (
    <div className="relative w-full flex flex-col justify-start items-center gap-5">
      <div
        onClick={() => navigate(-1)}
        className="absolute top-10 left-20 text-xs  p-2 rounded-lg bg-teal-50 cursor-pointer hover:bg-teal-100"
      >
        Back
      </div>
      <div>
        <h2 className="text-2xl leading-none mt-2 text-cyan-400 font-black w-1/2 text-center mx-auto">
          {p?.title}
        </h2>
      </div>
      <div className="w-1/2 text-center ">
        <p className="text-teal-400 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          numquam tempora possimus. Ipsam error placeat neque facere hic veniam.
          Animi sed soluta ducimus, sequi velit adipisci provident blanditiis
          facere laboriosam, obcaecati eius porro cupiditate enim molestiae amet
          consequatur harum magnam ipsum cum nemo tempore nobis earum. Error
          accusantium obcaecati nam sed illo at dolorem facilis architecto
          dolores, quia natus corrupti consequuntur porro fugit eius sunt
        </p>
      </div>
      <div className="w-full p-4 flex justify-center items-center">
        <div className="w-52 h-60 rounded-lg p-3 border-2 border-teal-400">
          <div className="w-full h-40 rounded-lg overflow-hidden">
            <img
              src={p?.image}
              alt={p?.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full flex justify-between items-center p-3">
            <h1>${p?.price}</h1>
            <button className="px-3 py-2 rounded bg-teal-200 text-sm text-teal-800 font-semibold">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-[80%] flex justify-center items-center">
      <h1 className="text-lg font-semibold text-teal-600">Loading...</h1>
    </div>
  );
};

export default ProductDetails;
