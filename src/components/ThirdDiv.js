import React from 'react';
import '../App.css';

import appleStore from '../assets/apple-store.svg';
import googlePlay from '../assets/google-play.svg';

const ThirdDiv = () => {
  return (
    <div className="shopascart pt-5 pb-5">
        <div className="container w-100">
            <h1 className='Home_tag text-center font-regular pt-5'>Shop on the go</h1>
            <p className='Home_tag_sm text-center mt-3'>Get the best Shopascart experience all in one app.</p>
            <div className="app_images container d-flex mt-3">
                <div className="apple_app_store">
                    <a href="/">
                        <img src={appleStore} alt="apple_store_download" width="180" />
                    </a>
                </div>
                <div className="google_app_play ml-2"> 
                        <a href="/">
                            <img src={googlePlay} alt="google_play_download" width="180" />
                        </a>
                        <li>
                            
                        </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdDiv;