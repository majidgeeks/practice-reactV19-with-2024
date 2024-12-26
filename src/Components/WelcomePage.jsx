import { useEffect, useState } from "react";

const WelcomePage = () => {
    const [user, setUser] = useState('');
    const getData = JSON.parse(localStorage.getItem('user'));

   useEffect(() => {
    setUser(getData.firstName);
   },[user]);

    return(
        <div>
          <h1>Hello welcome {user} </h1>
        </div>
    )
};

export default WelcomePage;