import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { Item } from "..";
const index = () => {
    
  const gitUsers = useSelector((state: RootState) => {
    return state.gitUser.gitUsers;
  });

 
  return (
    <div>
        <div  className="flex flex-wrap justify-around gap-3">
      {gitUsers &&
        gitUsers.map((value: any) => {
          return (
             <Item id={value.id} key={value.id}  image={value.avatar_url} name={value.login} link={value.html_url}/>
             );
            })}
            </div>
    </div>
  );
};

export default index;
