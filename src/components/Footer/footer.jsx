import React from 'react'

function Footer() {
    return (<>

        <style>
            {
                `
.footer-main{
    padding-top: 90px;
}

.address-main > div.col-lg-4 {
    border-bottom: dotted 1px #999;
}
.address-box {
    padding: 10px 0;
    margin-bottom: 30px;
}
.add-icon{
    float: left;
    width: 60px;
    display: inline-block;
    padding: 0px 5px;
}
.address-box .add-icon {
    background: #27303b;
    height: 75px;
    line-height: 75px;
    width: 75px;
    margin-right: 20px;
    text-align: center;
}
.add-icon img{
    width: 100%;
}
.address-box .add-icon img {
    max-width: 40px;
}
.add-content{
    padding-left: 70px;
}
.add-content h5 {
    font-size: 17px;
    color: #ffffff;
    padding: 0;
    font-weight: 500;
    margin-bottom: 10px;
}
.add-content p {
    font-size: 13px;
    color: #999999;
    font-weight: 300;
}
.add-content p a{
    font-size: 14px;
    color: #999999;
    font-weight: 300;
    word-wrap: break-word;
}
.add-content p a:hover{
    color: #ffb32d;
}
.footer-main{
    padding-top: 90px;
}

.address-main > div.col-lg-4 {
    border-bottom: dotted 1px #999;
}
.address-box {
    padding: 10px 0;
    margin-bottom: 30px;
}
.add-icon{
    float: left;
    width: 60px;
    display: inline-block;
    padding: 0px 5px;
}
.address-box .add-icon {
    background: #27303b;
    height: 75px;
    line-height: 75px;
    width: 75px;
    margin-right: 20px;
    text-align: center;
}
.add-icon img{
    width: 100%;
}
.address-box .add-icon img {
    max-width: 40px;
}
.add-content{
    padding-left: 70px;
}
.add-content h5 {
    font-size: 17px;
    color: #ffffff;
    padding: 0;
    font-weight: 500;
    margin-bottom: 10px;
}
.add-content p {
    font-size: 15px;
    color: #999999;
    font-weight: 400;
}
.add-content p a{
    font-size: 14px;
    color: #999999;
    font-weight: 300;
    word-wrap: break-word;
}
.add-content p a:hover{
    color: #ffb32d;
}
                `
            }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <footer className="footer-main bg-black">
            <div className="container">
                <div className="row address-main">
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <div className="address-box clearfix">
                            <div className="add-icon" style={{background: 'transparent'}}>
                                <img src="https://www.logolynx.com/images/logolynx/s_c3/c315c5e06b03ca367175fa44159e09d4.png" alt="" />
                            </div>
                            <div className="add-content">
                                <h5>Address</h5>
                                <p>Dubai kuruku sandhu, dubai main road, Dubai</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <div className="address-box clearfix">
                            <div className="add-icon" style={{background: 'transparent'}}>
                                <img src="/images/phone.png" alt="" />
                            </div>
                            <div className="add-content">
                                <h5>Phone</h5>
                                <p>  +(91) 7845634734 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <div className="address-box clearfix">
                            <div className="add-icon" style={{background: 'transparent'}}>
                                <img src="https://www.logolynx.com/images/logolynx/ea/eac2502aca98ce2df560b08f79990056.png" alt="" />
                            </div>
                            <div className="add-content"  >
                                <h5>Email</h5>
                                <p> <a href="mailto:" style={{textDecoration:"none"}}>dubaiProtontech@gmail.com</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="bg-black text-center text-white">

                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-facebook-f"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-twitter"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-google"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-instagram"></i
                        ></a>

                    </section>
                </div>

                <div className="text-center p-3 bg-black" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    ProtonTech © 2024 All Rights Reserved.
                </div>
            </footer>
        </footer>

    </>)
}

export default Footer