import {useDispatch} from "react-redux"
import { AppDispatch } from "../../features/store";
import { openModal } from "../../features/slice/githubUserSlice";

const index = ({
  image,
  name,
  link,
id
}: {
  image: string;
  name: string;
  link: string;
  id:number
}) => {

const dispatch =useDispatch<AppDispatch>()

  return (
    <>
      <div className="w-[300px] h-[400px] bg-slate-400 flex flex-col items-center ">
        <div className=" w-[150px] h-[150px] my-2">
          <img src={image} alt="" className="rounded-full" />
        </div>
        <div className="h-[150px] ">
          <button
            onClick={()=>{dispatch(openModal(id))}}
            className="bg-green-400 text-[#000] py-4 px-5 rounded-lg"
          >
            {name}
          </button>
        </div>
        <div className="h-[150px] ">
          <a href={link} target="_blank" className=" text-[#000] ">
            {link}
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
