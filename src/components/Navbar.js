import React from "react";
import "./App.css"

export default function Navbar() {
    // const [mode,setMode]=useState({
    //     backgroundColor:'white',
    //     color:'black',
    //     border:'2px solid white'
    // })

    // let toggleMode=()=>{
    //     if(mode.color==='black'){
    //         setMode({
    //             backgroundColor:'black',
    //             color:'white',
    //             border:"2px solid white"
    //         })
    //     }else{
    //         setMode({
    //             backgroundColor:'white',
    //             color:'black',
    //             border:'2px solid white'
    //         })
    //     }
    // }

    return (
    <>
    <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{border:"0.5px solid white"}}>
    <a className="navbar-brand" href="/" target="_blank" style={{color:"black",fontSize:"25px",padding:"25px"}}>InnoHub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Dev Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Sign In/Up</a>
        </li>
      </ul>
      {/* <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="myMode" onClick={toggleMode}/>
        <label className="form-check-label" htmlFor="myMode"></label>
      </div> */}
      <a className="nav-item" href="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EUMh71O9F5uFuRDmHtYO13goH8Rv4G2SOFwv-FVEpw&s" alt="Innohub" width="100px" height="100px"/>
      </a>
    </div>
  </div>
</nav>
    </>
  );
}
