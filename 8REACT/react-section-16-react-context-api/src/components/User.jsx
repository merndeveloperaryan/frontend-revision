import React, { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import { Link } from "react-router-dom";

const User = () => {
  const { users } = useContext(UserContext);

  return users && users.length > 0 ? (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <div>
        <h2 className="text-4xl text-cyan-400 font-black">User</h2>
      </div>
      <div className="w-1/2 text-center ">
        <p className="text-teal-400 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          numquam tempora possimus. Ipsam error placeat neque facere hic veniam.
          Animi sed soluta ducimus, sequi velit adipisci provident blanditiis
          facere laboriosam, obcaecati eius porro cupiditate enim molestiae amet
          consequatur harum magnam ipsum cum nemo tempore nobis earum. Error
          accusantium obcaecati nam sed illo at dolorem facilis architecto
          dolores,{" "}
        </p>
      </div>
      <div className="w-full p-5 flex flex-wrap gap-3">
        {users &&
          users.map(({ username, id }, ind) => (
            <Link
              to={`/user/${id}`}
              key={ind}
              className="w-32 p-3 bg-teal-100 rounded text-sm text-teal-600 cursor-pointer hover:bg-teal-200 transition-all duration-300"
            >
              {username}
            </Link>
          ))}
      </div>
    </div>
  ) : (
    <div className="w-full max-h-svh flex justify-center items-center">
      <h1 className="text-xl text-teal-500 ">Loading...</h1>
    </div>
  );
};

export default User;
