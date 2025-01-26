import React from "react";

const Card = () => {
  // Data for card components

  const cardData = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      occupation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      occupation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1599032909736-0155c1d43a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      occupation: "UX Designer",
      image:
        "https://plus.unsplash.com/premium_photo-1675130119382-6f891206f406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      occupation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-400 flex gap-4 justify-center items-center">
      {cardData.map(({ name, email, occupation, image }, index) => (
        <div
          key={index}
          className="w-52 h-fit p-2 rounded-md bg-zinc-100"
        >
          <div className="w-full h-52 bg-zinc-400 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={image}
              alt=""
            />
          </div>
          <div className="w-full py-2">
            <h2 className="font-medium mb-1 text-zinc-600">{name}</h2>
            <p className="text-xs text-zinc-500">{email}</p>
            <h3 className="text-xs font-bold text-zinc-500">
              {occupation} : Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.{" "}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
