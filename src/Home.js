import React from 'react';
import './Home.css';  
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg' alt="" />

            {/* Product id, title, rating, image */}
            <div className="home__row">
            <Product
            id='1'
            title='Acer Nitro i5'
            price = {63500.99}
            rating = {4}
            image="https://images-na.ssl-images-amazon.com/images/I/61FioHkKfxL._SL1000_.jpg"
            />
              <Product
            id='2'
            title='Alexa Silver Echo'
            price = {9999.99}
            rating = {5}
            image="https://media.wired.com/photos/5a5016a56b067b2c25bd9a38/master/w_2400,c_limit/Alexa-TopArt-Silver-Echo-HERO-IMAGE.jpg"
            />
            </div>
        <div className='home__row'>
        <Product
            id='3'
            title='
            Nx120s Stereo Headset With Foldable Microphone'
            price = {1365}
            rating = {4}
            image="https://images-na.ssl-images-amazon.com/images/I/61K5mu%2BDJDL._SL1200_.jpg"
            />
              <Product
            id='4'
            title='Middle Earth Shadow of Mordor (PS4)'
            price = {949}
            rating = {5}
            image="https://images-na.ssl-images-amazon.com/images/I/51KGuModEIL.jpg"
            />
               <Product
            id='5'
            title='Acer Nitro i5'
            price = {11.56}
            rating = {5 }
            image="https://images-na.ssl-images-amazon.com/images/I/61FioHkKfxL._SL1000_.jpg"
            />
        </div>
        <div className='home__row'>
        <Product
            id='6'
            title='Acer Nitro i5'
            price = {11.56}
            rating = {5 }
            image="https://images-na.ssl-images-amazon.com/images/I/61FioHkKfxL._SL1000_.jpg"
            />
            </div>
            <div className='home__row'>
        <Product
            id='7'
            title='Acer Nitro i5'
            price = {11.56}
            rating = {5 }
            image="https://images-na.ssl-images-amazon.com/images/I/61FioHkKfxL._SL1000_.jpg"
            />
              <Product
            id='8'
            title='Acer Nitro i5'
            price = {11.56}
            rating = {5 }
            image="https://images-na.ssl-images-amazon.com/images/I/61FioHkKfxL._SL1000_.jpg"
            />
               <Product
            id='9'
            title='Acer Nitro i5'
            price = {11.56}
            rating = {5 }
            image="https://images-na.ssl-images-amazon.com/images/I/61FioHkKfxL._SL1000_.jpg"
            />
        </div>
        <div className='home__row'>
        <Product
            id='10'
            title='Acer Nitro i5'
            price = {11.56}
            rating = {5 }
            image="https://images-na.ssl-images-amazon.com/images/I/61FioHkKfxL._SL1000_.jpg"
            />
            </div>

            {/* Product */}
        </div>
    )
}

export default Home;
