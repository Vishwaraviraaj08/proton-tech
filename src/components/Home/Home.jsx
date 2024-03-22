import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import data from '../../utils/data.json'
import Footer from "../Footer/footer.jsx";
import {Link} from "react-router-dom";
import Countdown from "../countdown.jsx";

export default function Home() {
    let carousel = data.carousel
    return (<>
            <style>
                {`
                .animate-charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 55%,
    #fff800 77%,
    #231557 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.carousel-overlay{
     background: rgba(0, 0, 0, 0.5);
     border-radius: 10px;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        color: white;
        padding: 30px;
        text-align: center;
        z-index: 1;
        font-size: 2rem;
        

}


.buton {
 padding: 0.8em 1.8em;
 border: 2px solid #17C3B2;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: #17C3B2;
}

.buton::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: #17C3B2;
 transition: .5s ease;
 display: block;
 z-index: -1;
}

.buton:hover::before {
 width: 105%;
}

.buton:hover {
 color: #111;
}

                `}
            </style>
            <Carousel fade className='mx-auto mb-3' style={{width: '100%', minHeight: '80vh', maxHeight: '80vh'}}>
                {carousel.map((item, i) => {
                    return (<Carousel.Item key={i} interval={2000}>
                            <img
                                className=""
                                style={{
                                    width: '100%',
                                    height: '80vh',
                                    objectPosition: 'center center',
                                    objectFit: 'cover'
                                }}
                                src={item.src}
                                alt={item.alt}
                            />
                        <Carousel.Caption className={"carousel-overlay"} >
                            <h2 className={"mb-4"}>{item.title}</h2>
                            <Link to={'/products'} className={"mb-3"}><button className={"buton"}>Read More</button></Link>
                        </Carousel.Caption>
                        </Carousel.Item>)
                })}
            </Carousel>
            <Countdown />
            <div className='mt-5 container-fluid d-flex justify-content-center flex-column' style={{height: '70vh'}}>
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                        <p className='card-title'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h3 className="animate-charcter text-center fw-bolder display-2"> Proton Tech</h3>
                                        <h4 className="animate-charcter text-center fw-bolder display-2"> AI LLM Model </h4>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                        <p className='mt-3 fs-5' style={{textAlign: 'justify'}}>
                            Proton Tech is a leading provider of electronic products and services. We are dedicated to
                            providing our customers with the best quality products and services. Our products are
                            designed to meet the needs of our customers and are built to last. We are committed to
                            providing our customers with the best products and services at the best prices. We are
                            dedicated to providing our customers with the best quality products and services. Our
                            products are designed to meet the needs of our customers and are built to last. We are
                            committed to providing our customers with the best products and services at the best prices.
                        </p>
                    </div>
                </div>
            </div>
        </>);
}