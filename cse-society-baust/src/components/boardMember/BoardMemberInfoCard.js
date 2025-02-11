import React from "react";

const BoardMemberInfoCard = () => {
  return (
    <div className="infoCard w-[29%] mx-3 rounded-xl relative flex items-center justify-between flex-col">
      <div className="top flex flex-col items-center py-3">
        <div className="image">
          <img
            src="/thumbnail-300-300jpg.jpg"
            className="h-[150px] w-[150px] rounded-full"
            alt=""
          />
        </div>
        <h3 className="text-white font-xl text-center my-1">John Doe</h3>
        <p className="text-gray-300 font-md text-center my-1">Designition</p>
        <div className="cta flex flex-row items-center">
          <a href="#" className="bg-[#c400d7] py-2 px-10 block mx-1 text-white">
            Email
          </a>
          <a
            href="#"
            className="text-[#c400d7] border-2 border-[#c400d7]  py-2 px-10 block mx-1 "
          >
            Whatsapp
          </a>
        </div>
      </div>
      <div className="skills bg-[#1f1a36] w-full rounded-bl-xl rounded-br-xl">
        <h3 className="text-white text-md my-2 px-2">Skills</h3>
        <ul className="list-none flex flex-wrap">
          <li className="mx-2 px-2 py-1  my-1 text-white text-xs border-2 border-[#7f8a9a] hover:border-[#c400d7] duration-500">
            Ui / Ux
          </li>
          <li className="mx-2 px-2 py-1  my-1 text-white text-xs border-2 border-[#7f8a9a] hover:border-[#c400d7] duration-500">
            Web Devlopment
          </li>
          <li className="mx-2 px-2 py-1 my-1 text-white text-xs border-2 border-[#7f8a9a] hover:border-[#c400d7] duration-500">
            Web Devlopment
          </li>
          <li className="mx-2 px-2 py-1 my-1 text-white text-xs border-2 border-[#7f8a9a] hover:border-[#c400d7] duration-500">
            Web Devlopment
          </li>
          <li className="mx-2 px-2 py-1 my-1 text-white text-xs border-2 border-[#7f8a9a] hover:border-[#c400d7] duration-500">
            Web Devlopment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoardMemberInfoCard;
