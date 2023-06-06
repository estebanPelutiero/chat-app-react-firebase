import React from 'react'

const style = {
    button: `flex items-center rounded cursor-pointer bg-gray-200 px-4 py-2 hover:bg-gray-100`,
    logOut: `px-3`,
    userIcon: `w-[40px] rounded-full`
}

const LogOut = ( { userData } ) => {
    
  return (
        <div className={style.button}>
            <img className={style.userIcon} src={userData?.photoURL} alt={userData?.dislayName} />
            <p className={style.logOut} >Log Out</p>
        </div>
  )
}

export default LogOut