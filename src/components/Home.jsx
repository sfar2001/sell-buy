import React from 'react'
import 'animate.css'

function Home() {
    return (
        <div className='fram1'>
            <div className='group7 '>
                <div className='img-L animate__animated animate__backInLeft'>
                    <ellipse className='ellipse1 ' ></ellipse>
                    <img src="./shirt.png" alt="" className='shirt1' />
                </div>
                <div className='Discirption-L animate__animated animate__fadeInLeft'>
                    <div className='Discirption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores nisi, id iusto earum illum dignissimos ut distinctio, voluptas recusandae repellendus, officia aspernatur at nulla autem sed facilis eum aliquam.</div>
                </div>
                <div className='preBox-L animate__animated animate__fadeInLeft'>
                    <rect className='Rectangle-1' ></rect>
                    <label htmlFor="" className='PR-order'>Pre order</label>
                </div>
                <div className='buyBox-L animate__animated animate__fadeInLeft'>
                    <rect className='Rectangle-2' ></rect>
                    <label htmlFor="" className='buy'>Buy</label>
                </div>
            </div>

            <div className='group9'>
                <div className='rectangel3'>
                    <img src="./signet.png" alt="" className='signet' />
                    <label htmlFor="" className='text1'>BOOK MARK YOUR FIRST EDITION..</label>
                    <div className='line1'></div>
                    <label htmlFor="" className='text2'>OR START TO CREAT AND SELL...</label>
                </div>

            </div>


            <div className='group8'>
                <div className='img-R'>
                    <ellipse className='ellipse2' ></ellipse>
                    <img src="./shirt.png" alt="" className='shirt2' />
                </div>
                <div className='Discirption-R '>
                    <div className='Discirption2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores nisi, id iusto earum illum dignissimos ut distinctio, voluptas recusandae repellendus, officia aspernatur at nulla autem sed facilis eum aliquam.</div>
                </div>
                <div className='preBox-R'>
                    <rect className='Rectangle-R1' ></rect>
                    <label htmlFor="" className='PR-order2'>Pre order</label>
                </div>
                <div className='buyBox-R'>
                    <rect className='Rectangle-R2' ></rect>
                    <label htmlFor="" className='buy2'>Buy</label>
                </div>
            </div>
        </div>
    )
}

export default Home