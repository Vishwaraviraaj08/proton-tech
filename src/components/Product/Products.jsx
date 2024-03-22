
import cards from '../../utils/productinfo.js';
import { Link } from 'react-router-dom';



export function Products() {
    console.log(cards);
    return (
        <>
            <style>
                { `
            @import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");
            * {
                box-sizing: border-box;
            }

            body {
                background-color: #242424;
                min-height: 100vh;
                font-family: "Fira Sans", sans-serif;
            }

            /* .contain{
                margin-left: 50px;

            } */


            #overlay {
                position: relative;
                bottom: 0;
                left: 0;
                z-index:2;
            }

        //     .bg-image{
        //         background-image: url("../../../public/images/Carousel-5.jpg");
        //         background-size: cover;
        //         background-position: center;
        //         background-repeat: no-repeat;
        //         height: 60vh;
        //         display: flex;
        //         justify-content: center;
        //         align-items: center;
        //         text-align: center;
        //         background-color: rgba(0, 0, 0, 0.5);
        //         // opacity: 1;
        //     }
            
        //     .bg-image::before {    
        //         content: "";
        //         background-image: url("../../../public/images/Carousel-5.jpg");
        //         background-size: cover;
        //         background-position: center;
        //         background-repeat: no-repeat;
        //         height: 60vh;
        //         display: flex;
        //         justify-content: center;
        //         align-items: center;
        //         text-align: center;
        //         opacity: 0.75;
        //   }
        .bg-image {
            position: relative; 
            height: 50vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
        
        .bg-image::before {    
              content: "";
              background-image: url("/images/Carousel-5.jpg");
              background-size: cover;
              background-position: center;
              position: absolute;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              opacity: 0.3;
        }
          

            .text-white {
                --bs-text-opacity: 1;
                color: rgba(55, 155, 255, 100) !important;
            }

            .preview-card {
                position: relative;
                margin: 30px;
                // background: transparent;
                background-image: linear-gradient(360deg, #000000 2%,#3c3c3e 100%);
                background-image: -webkit-linear-gradient(360deg, #000000,#3c3c3e 100%);
                // box-shadow: 0px 0px 15px 2px rgba(55,155,255,100);
                padding: 30px 25px 30px;
                border-radius: 25px;
                border: 1px solid linear-gradient(90deg, #00F260,#0575E6);

                transition: all 0.3s;
            }

            @media screen and (max-width: 992px) {
                .preview-card {
                    height: auto;
                }
            }

            @media screen and (max-width: 768px) {
                .preview-card {
                    min-height: 500px;
                    height: auto;
                    margin: 120px auto;
                }
            }

            @media screen and (max-height: 500px) and (min-width: 992px) {
                .preview-card {
                    height: auto;
                }
            }

            .preview-card__item {
                display: flex;
                align-items: center;
            }

            @media screen and (max-width: 768px) {
                .preview-card__item {
                    flex-direction: column;
                }
            }

            .preview-card__item.swiper-slide-active .blog-slider__img img {
                opacity: 1;
                transition-delay: 0.3s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > * {
                opacity: 1;
                transform: none;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(1) {
                transition-delay: 0.3s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(2) {
                transition-delay: 0.4s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(3) {
                transition-delay: 0.5s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(4) {
                transition-delay: 0.6s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(5) {
                transition-delay: 0.7s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(6) {
                transition-delay: 0.8s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(7) {
                transition-delay: 0.9s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(8) {
                transition-delay: 1s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(9) {
                transition-delay: 1.1s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(10) {
                transition-delay: 1.2s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(11) {
                transition-delay: 1.3s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(12) {
                transition-delay: 1.4s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(13) {
                transition-delay: 1.5s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(14) {
                transition-delay: 1.6s;
            }

            .preview-card__item.swiper-slide-active .blog-slider__content > *:nth-child(15) {
                transition-delay: 1.7s;
            }

            .preview-card__img {
                width: 300px;
                flex-shrink: 0;
                height: 300px;
                background-image: linear-gradient(147deg, #000 0%, #000 74%);
                box-shadow: 0px 0px 10px 2px rgba(55,155,255,100);
                border-radius: 20px;
                transform: translateX(-80px);
                overflow: hidden;
            }

            .preview-card__img:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(147deg, #000 0%, #000 74%);
                border-radius: 20px;
                opacity: 0.4;
            }

            .preview-card__img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                opacity: 1;
                border-radius: 20px;
                transition: all 0.3s;
            }

            @media screen and (max-width: 992px) {
                .preview-card__img {
                }
            }

            @media screen and (max-width: 768px) {
                .preview-card__img {
                    transform: translateY(-50%);
                    width: 90%;
                }
            }

            @media screen and (max-width: 576px) {
                .preview-card__img {
                    width: 95%;
                }
            }

            @media screen and (max-height: 500px) and (min-width: 992px) {
                .preview-card__img {
                    height: 270px;
                }
            }

            .preview-card__content {
                padding-right: 25px;
            }

            @media screen and (max-width: 992px) {
                .preview-card__content {
                }
            }

            @media screen and (max-width: 768px) {
                .preview-card__content {
                    margin-top: -80px;
                    text-align: center;
                    padding: 0 30px;
                }
            }

            @media screen and (max-width: 576px) {
                .preview-card__content {
                    padding: 0;
                }
            }

            .preview-card__content > * {
                transform: translateY(25px);
                transition: all 0.4s;
            }

            .preview-card__code {
                color: #7b7992;
                margin-bottom: 15px;
                display: block;
                font-weight: 500;
            }

            .preview-card__title {
                font-size: 24px;
                font-weight: 700;
                // font-color: linear-gradient(90deg, #00F260,#0575E6);
                color: #fff;
                margin-bottom: 20px;
            }

            .preview-card__text {
                color: #fff;
                margin-bottom: 30px;
                line-height: 1.5em;
            }

            .preview-card__button {
                display: inline-flex;
                background-image: linear-gradient(90deg, #467ED1,#1CD0B8);
                background-image: -webkit-linear-gradient(90deg, #467ED1,#1CD0B8);
            
                padding: 15px 35px;
                margin-bottom: 30px;
                border-radius: 50px;
                color: #fff;
                box-shadow: 0px 3px 10px rgba(55,155,255,100);
                text-decoration: none;
                font-weight: 500;
                justify-content: center;
                text-align: center;
                letter-spacing: 1px;
            }

            .preview-card__button:hover {
                color: #fff;
                text-decoration: none;
            }

            @media screen and (max-width: 576px) {
                .preview-card__button {
                    width: 100%;
                }
            }
            
//             .xyz{
//             background: linear-gradient(to right, #ffffff 0%, #ffffff 100%);
//             font-weight: bolder;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//             }


            `}
            </style>
            <div className="contain bg-image">
                <div>
                    <h1 style={{color:"white",position:"relative",textAlign:"center"}} className={"xyz"}>Engineering the Future,</h1>
                    <h1 style={{color:"white",position:"relative",textAlign:"center"}} className={"xyz"}>AI is always the great</h1>
                </div>
            </div>
            <h1 className="text-center text-white my-5">Features</h1>
            <div className="container">
                <div className="row mt-5 mx-5">
                    {cards.map((card, index) => (
                        <div className="preview-card" key={index} style={{marginTop: '3rem'}}>
                            <div className="preview-card__wrp">
                                <div className="preview-card__item">
                                    <div className="preview-card__img">
                                        <img src={card.image} alt="" />
                                    </div>
                                    <div className="preview-card__content">
                                        <div className="preview-card__title">{card.title}</div>
                                        <div className="preview-card__text">{card.text}</div>
                                        <Link to={"/" + card.id} className="preview-card__button">
                                            {card.button}
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
