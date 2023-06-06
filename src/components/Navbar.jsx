import React, { useEffect } from 'react';
import SignIn from './SignIn';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from './LogOut';

const style = {
    nav: `bg-gray-600 h-20 flex justify-between items-center p-4 rounded-t-md`,
    heading: `text-white text-2xl`
}

const Navbar = () => {

    const [user] = useAuthState(auth);
    // const userIcon = user.photoURL;
    console.log(user)

  return (
    <div className={style.nav}>
        <h1 className={style.heading} >Partycle</h1>

        {user ? <LogOut userData={user} /> : <SignIn />}

    </div>
  )
}

export default Navbar