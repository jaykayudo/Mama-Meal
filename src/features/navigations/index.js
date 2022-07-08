import { AuthContext } from "../../context/AuthContext";
import React, {useContext} from "react";
import Navigator from "./navigation";
import AuthNavigator from "./authnavigation";
const MainNavigation = () => {
    const auth =  useContext(AuthContext)
    return auth.isAuthenticated?<Navigator /> : <AuthNavigator />;
}
 
export default MainNavigation;