import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


export const useRedirect = (userAuthStatus) => {
    const history = useHistory();
  
    useEffect(() => {
      const handleMount = async () => {
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
          // Logged in redirect below!
          if (userAuthStatus === "loggedIn") {
            history.push("/");
          }
        } catch (err) {
            // User not logged in redirect below!
          if (userAuthStatus === "loggedOut") {
            history.push("/");
          }
        }
      };

      handleMount();
    }, [history, userAuthStatus]);
  };