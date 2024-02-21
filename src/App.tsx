import {  useDispatch,useSelector } from "react-redux"
import {useEffect} from "react"
import { getGitUsers } from "./features/slice/githubUserSlice"
import { AppDispatch,RootState } from "./features/store"
import { SearchField,ItemList,Modal } from "./component"
const App = () => {
  const gitUsers = useSelector((state: RootState) => {
   return state.gitUser.gitUsers;
  });

  const dispatch = useDispatch<AppDispatch>()
useEffect(()=>{

  if(gitUsers.length=== 0){

    dispatch( getGitUsers())
  }
},[])
  return (
    <>
    <SearchField/>
    <ItemList/>
<Modal/>

    </>
  )
}

export default App