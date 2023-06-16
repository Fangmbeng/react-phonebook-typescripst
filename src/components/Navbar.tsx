import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from "../config/firebase";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);

  const signOutOnClick = () => {
      signOut(auth)
      location.reload();
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
        location.reload();
    }
  }

  const dropdown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className="flex item-center justify-between fkex-wrap bg-teal-500 p-5">
      <div className="flex item-center flex-shrink text-white mr-6" >
        <Link to="/" className = "font semi-bold text-xl tracking-tight" > Digit</Link>
      </div>
      <div className="block">
        <button onClick={dropdown}
          className='flex items-center py-3 px-3 
          text-teal-200 border rounded border-teal-400 hover:border-white hover:text-white'>
          drop
        </button>
      </div>
      {isVisible ? (
        <div className='w-full block flex-grow items-center'>
          <div className='text-sm lg:flex-grow'>
            <Button onClick={clicked} className='p-3 m-5 justify-center border-teal-400 hover:border-white hover:text-white'>
              <Link to='/' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
               text-teal-200 rounded hover:border-white hover:text-white mr-4'>
                Home
              </Link>
            </Button>
            <Button onClick={clicked} className='p-3 m-5 justify-center border-teal-400 hover:border-white hover:text-white'>
              <Link to='/about' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
               text-teal-200 rounded hover:border-white hover:text-white mr-4'>
                About
              </Link>
            </Button>
            <Button onClick={clicked} className='p-3 m-5 justify-center border-teal-400 hover:border-white hover:text-white'>
              <Link to='/dashboard' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
               text-teal-200 rounded hover:border-white hover:text-white mr-4'>
                Dashboard
              </Link>
            </Button>
            { !auth.currentUser ? 
            <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                    
                <Link to="/" onClick={ () => signInOnClick() } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Login
                </Link>
                </div>
            </Button>
             :
             <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                <Link to="/" onClick={ () => signOutOnClick() } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Sign Out
                </Link>
                </div>
            </Button> }
          </div>
        </div>) :
        (<></>)}
    </nav>
  )
}