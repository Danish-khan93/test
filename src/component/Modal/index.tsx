import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../features/store";
import { closeModal } from "../../features/slice/githubUserSlice";
import axios from "axios";
import { useEffect, useState } from "react";
const index = () => {
  const [gitSingaluser, setgitSingaluser] = useState<{} | any>({});

  const dispatch = useDispatch<AppDispatch>();
  const modalState = useSelector((state: RootState) => {
    return state.gitUser.modal;
  });
  // const userID = useSelector((state: RootState) => {
  //   return state.gitUser.id;
  // });
  const userState = useSelector((state: RootState) => {
    return state.gitUser.singaluser;
  });

  const user = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${userState.login}`,
        {
          headers: {
            Authorization:
              "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",
          },
        }
      );
      console.log(res?.data);
      setgitSingaluser(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user();
  }, [userState]);

  return (
    <div
      className={`absolute left-[50%] top-[50%] ${
        modalState === true ? "flex" : "hidden"
      }`}
    >
      <div className="w-[500px] h-[500px] bg-slate-900 rounded-lg">
        <button
          onClick={() => dispatch(closeModal())}
          className="text-[#fff] px-3 py-4"
        >
          x
        </button>
        <div className=" w-[150px] h-[150px] my-2">
          <img
            src={gitSingaluser?.avatar_url}
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-[#fff]">
            follower:{" "}
            <span className="text-[#fff]">{gitSingaluser?.followers}</span>
          </p>
        </div>
        <div>
          <p className="text-[#fff]">
            following:{" "}
            <span className="text-[#fff]">{gitSingaluser?.following}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
