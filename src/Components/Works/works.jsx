import React from 'react';
import './works.css';
import UIdesign from "../../assets/ui-design.png";
import Currencyconverter from "../../assets/currencyconverter.png";
import temperatureconverter from "../../assets/temperatureconverter.png";
import productlandingpage from "../../assets/productlandingpage.png";
import productlandingpage2 from "../../assets/product-landing-page2.png";

const Portfolio = () => {
    return (
        <section id='portfolio'>

            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="portfolio_container">

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Currencyconverter} alt="Currencyconverter" className='project_img' />
                    </div>
                    <h3>Currency Converter</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button>
                    <button className='btnTools'>Tailwind CSS</button> <br />
                    <button className='btn1'>
                        <a href="https://currencyconverter-roan.vercel.app/" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={temperatureconverter} alt="" className='project_img' />
                    </div>
                    <h3>Temperature Converter</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button>
                    <button className='btnTools'>Tailwind CSS</button> <br />
                    <button className='btn1'>
                        <a href="https://temperature-converter-sable-psi.vercel.app/" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={productlandingpage} alt="" className='project_img' />
                    </div>
                    <h3>Product Landing Page</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button> <br />
                    <button className='btn1'>
                        <a href="https://product-landing-page-pink-two.vercel.app/" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={productlandingpage2} alt="" className='project_img' />
                    </div>
                    <h3>Product Landing Page 2</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button> <br />
                    <button className='btn1'>
                        <a href="https://product-landing-page2.vercel.app/" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={UIdesign} alt="" className='project_img' />
                    </div>
                    <h3>Pending.</h3>
                    <button className='btn1'>
                        <a href="https://www.youtube.com" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={UIdesign} alt="" className='project_img' />
                    </div>
                    <h3>Pending.</h3>
                    <button className='btn1'>
                        <a href="https://www.youtube.com" target='_blank'>Live Demo</a>
                    </button>
                </article>
            </div>
        </section>
    )
}
export default Portfolio;