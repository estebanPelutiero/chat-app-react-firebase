import React from 'react';
import Navbar from './components/Navbar';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] m-auto text-center`,
  sectionContainer: `relative flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl rounded-lg`
}

function App() {

  const user = useAuthState(auth);

  return (
    
      <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          {/* Navbar */}
          <Navbar />
          {/* Chat component */}
        </section>
      </div>
    
  )
}

export default App
