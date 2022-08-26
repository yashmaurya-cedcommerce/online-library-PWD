import React from 'react'

export default function Welcome(props) {
  return (
    <div className='welcomeContainer' id="welcomeID">

        <p className='welcomeHeading'>Welcome to Open Library</p>

        <div className='welcomeFlex'>

            <div className='featureCardDiv'>

                <div className='featureImageDiv'>

                    <img src="../feature1.png" alt="" />

                </div>

                <div className='featureDetailsDiv'>

                    <div className='featureContent'>

                        <h5 className='featureHeading'>Read Free Library Books Online</h5>
                        <p className='featureSubHeading'>Millions of Books available through Controlled Digital Lending</p>

                    </div>

                </div>

            </div>


            <div className='featureCardDiv'>

                <div className='featureImageDiv'>

                    <img src="../feature2.png" alt="" />

                </div>

                <div className='featureDetailsDiv'>

                    <div className='featureContent'>

                        <h5 className='featureHeading'>Keep Track Of Your Favourite Books</h5>
                        <p className='featureSubHeading'>Organize Your Books using Lists and The Reading Log</p>

                    </div>

                </div>

            </div>


            <div className='featureCardDiv'>

                <div className='featureImageDiv'>

                    <img src="../feature3.png" alt="" />

                </div>

                <div className='featureDetailsDiv'>

                    <div className='featureContent'>

                        <h5 className='featureHeading'>Try the Virtual Library Explorer</h5>
                        <p className='featureSubHeading'>Digital Shelves organized a physical library</p>

                    </div>

                </div>

            </div>

        </div>



        

    </div>
  )
}