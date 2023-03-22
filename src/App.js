import {useState, useEffect} from "react"

import './App.css';

// import RegisterOrLogContainer from "./components/registerOrLogContainer/RegisterOrLogContainer";
// import Homepage from './components/homepage/Homepage';

import { getTokenFromCookie } from './common'; //keep
import { authCheck } from './utils/user'; //keep

//!!! all of this down to the return might be necessary to keep!!!
function App() {
    const user = [user, setUser] = useState(null);
    //***other states will need to be set here***

    console.log("hello world");

    useEffect(() => {
      if (document.cookie){
        let token = getTokenFromCookie("jwt_token")

        if (token === "false") {
          setUser(null);
        } else {
          loginWithToken(token)
        }
      }
    }, []);

    const loginWithToken = async (token) => {
      const persistentUser = await authCheck(token);

      await setUser(persistentUser.user);
      // await setRecipes(persistentUser.recipes)
      //await other setX for whatever's displayed
    }

  return ( //all this can be changed to React-Router stuff
    <div className="App">
      <h1> Hello World</h1>
      <Homepage
      user = {user}
      setUser = {setUser}/>
      <RegisterOrLogContainer
      user = {user}
      setUser ={setUser} />
    </div>
  );
}

export default App;