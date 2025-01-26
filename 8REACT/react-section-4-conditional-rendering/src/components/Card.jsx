import React from "react";

const Card = () => {
  const cardData = [
    {
      name: "John Doe",
      price: 2300,
      isAdded: false,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      price: 1200,
      isAdded: false,
      image:
        "https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      name: "Alice Johnson",
      price: 8000,
      isAdded: true,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Bob Brown",
      price: 2999,
      isAdded: false,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Cart Handler
  const cartHandler = (isAdded) => {
    !isAdded ? alert('Item is out of stock') : alert('You purchased this item already');
  }

  return (
    <div className="w-full h-screen bg-zinc-400 flex justify-center items-center gap-1">
      {cardData.map(({ name, price, isAdded, image }, index) => (
        <div key={index} className="w-52 h-fit p-2 rounded-md bg-zinc-100">
          <div className="w-full h-32 bg-zinc-400 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={image}
              alt=""
            />
          </div>
          <div className="w-full py-2">
            <div className="w-full py-2 px-1 flex justify-between items-center">
              <h2 className="font-medium mb-1 text-zinc-600">{name}</h2>
              <p className="text-xs text-zinc-500">${price}</p>
            </div>
            <button
              onClick={() => cartHandler(isAdded)}
              className={`px-2 py-1 mt-2 rounded text-white text-sm font-semibold ${
                isAdded ? "bg-blue-500" : "bg-green-600"
              }`}
            >
              {isAdded ? "Cancel Order" : "Add to card"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
