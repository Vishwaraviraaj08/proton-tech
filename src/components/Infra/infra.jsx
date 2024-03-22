import React from 'react'
import data from '../../utils/data'
function Infra() {
    const details = data.Gallery;
    return (
        <>
            <style>
                {`
                    :root {
  --cardW: 400px;
  --cardH: 400px;
  --fontFam: "Open Sans", sans-serif;
  --color1: #212534;
  --color2: #fff;
  --color3: #191c29;
}

body {
  background-color: var(--color1);
}

.heading {
  width: 100%;
  margin-left: 1rem;
  font-weight: 900;
  font-size: 2rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 1;
  padding-bottom: 0.5em;
  margin-bottom: 1rem;
  position: relative;
}

.heading:after {
  display: block;
  content: "";
  position: absolute;
  width: 340px;
  height: 8px;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  bottom: 0;
}


.flipcards {
margin-top: 5em;
margin-bottom: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 5em;
  font-family: var(--fontFam);
}
.flipcards .flipcard {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: var(--cardW);
  height: var(--cardH);
  border-radius: 10px;
  perspective: 1000px;
  box-shadow: 0;
}
.flipcards .flipcard:hover .flipcard__inner {
  transform: rotateY(-180deg);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.55) 0px -2px 6px 0px inset;
}
.flipcards .flipcard__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}
.flipcards .flipcard__inner .__front,
.flipcards .flipcard__inner .__back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Safari */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 0.5em;
  overflow: hidden;
  background-color: var(--color2);
}
.flipcards .flipcard__inner .__front {
  z-index: 1;
  flex-flow: column;
  border: 3px solid cyan;
  background-color: var(--color3);
}
.flipcards .flipcard__inner .__front * {
  margin: 0;
}
.flipcards .flipcard__inner .__back {
  transform: rotateY(-180deg);
  z-index: 2;
}
.flipcards .flipcard__inner .__back p {
  font-size: 1.5em;
}

.__back{
    background: var(--color3);
}
                `}
            </style>
            <h1 className="heading" style={{marginTop: '40px'}}>INFRASTRUCTURES</h1>
            <div className="flipcards">
                {details.map((detail, index) => {
                    return(
                        <div key={index} className="flipcard flipcard--red">
                            <div className="flipcard__inner">
                                <div className="__front">
                                    <img src={detail.largeImage} alt={''} />
                                </div>
                                <div className="__back light-color-text gradient-color-bg">
                                    <p>{detail.title}</p>
                                </div>
                            </div>
                        </div>
                    )})}

            </div>
        </>
    )
}

export default Infra
