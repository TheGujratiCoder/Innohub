import React, { useState } from 'react'
import s1 from "./s1.png"
import s2 from "./s2.png"
import s3 from "./s3.png"
// import logo from "./mainlogo.png"

export default function HomePage() {
    const rowStyle={
        display:"flex"
    }

    const columnStyle={
        flex:"33.33%",
        padding:"5px"
    }

    const textStyle={
        flex:"33.33%",
        font:"10px",
        padding:"7px"
    }

    const [hoverText1,setHoverText1]=useState(false)
    const [hoverText2,setHoverText2]=useState(false)
    const [hoverText3,setHoverText3]=useState(false)
    
  return (
    <div className='container'>
      <main style={{marginLeft:"50px"}}>
            <section id="about">
                {/* <img src={logo} alt='About' /> */}
                <h2>Innohub</h2>
                <p>InnoHub is a startup dedicated to providing innovative solutions to businesses of all sizes.</p>
                <p>Our mission is to empower organizations to thrive in the ever-evolving digital landscape by </p>
                <p>leveraging cutting-edge technologies and creative thinking.</p>
            </section>
            <div className="row" style={rowStyle}>
            <h2 id='services'> Our Services </h2>
                <div className="column" style={columnStyle}>
                    <img src={s1} alt="" style={{width:"100%"}} 
                    onMouseEnter={()=>{setHoverText1(true)}} 
                    onMouseLeave={()=>{setHoverText1(false)}}/>
                </div>
                <div className="column" style={columnStyle}>
                    <img src={s2} alt="" style={{width:"96%"}} 
                    onMouseEnter={()=>{setHoverText2(true)}} 
                    onMouseLeave={()=>{setHoverText2(false)}}/>
                </div>
                <div className="column" style={columnStyle}>
                    <img src={s3} alt="" style={{width:"105%"}}
                    onMouseEnter={()=>{setHoverText3(true)}} 
                    onMouseLeave={()=>{setHoverText3(false)}}/>
                </div>
            </div>
            <div className="row" style={rowStyle}>
                <div className="column" style={textStyle}>
                    <strong style={{fontSize:"30px"}}>Launch a venture</strong>
                </div>    
                <div className="column" style={textStyle}>
                    <strong style={{fontSize:"30px"}}>Cultivate an Ecosystem</strong>
                </div>
                <div className="column" style={textStyle}>
                    <strong style={{fontSize:"30px"}}>Bring Innovation</strong>
                </div>
            </div>
            <div className="row" style={rowStyle}>
                {hoverText1 && (
                    <div className="column">
                        <strong>
                        As a corporate innovation accelerator, InnoHub offers companies the capability to create business impact. 
                        Launching a Venture is a practical way to deliver on the innovation ROI. We start with strategic priorities 
                        and market insights to inform the business challenges that require innovation. These directions guide a 
                        co-creation process, informed by Design-Driven innovation, to identify customer-critical use cases and 
                        cutting edge technologies that can solve the challenges.  Our development teams can partner or independently 
                        develop MVPs that power profitable businesses. To create scalable solutions that generate sustainable business impact,
                        </strong>
                    </div>
                )} 
                {hoverText2 && (
                    <div className="column" style={columnStyle}>
                        <strong>
                        Innovation today depends on who is in your network, either inside or outside the enterprise.
                        An innovation ecosystem can be the primary source for new ideas, new markets, new talent, and funding. 
                        With state-of-the-art business intelligence, trend scouting and forecasting of future scenarios, InnoHub helps 
                        find the right partner for your future success. Our extensive international network plays a vital role in bringing 
                        you key insights to the future of your industry, in your region and tailor-made to your organization's needs. 
                        </strong>
                    </div>
                )}
                {hoverText3 && (
                    <div className="column" style={columnStyle}>
                        <strong>
                            If innovation was easy, everyone would innovate. InnoHub`s experience innovating within organizations
                            brings insight to the challenges facing leaders to disrupt current ways of thinking and doing. 
                            Today, successful innovation requires new leadership, teaming and culture. Creating a future based on 
                            agility, supported by a tolerance for ambiguity, can pivot and organization to continually innovate. 
                        </strong>
                    </div>
                )}
            </div>
        </main>
    </div>
  )
}
