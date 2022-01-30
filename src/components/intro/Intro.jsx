import "./intro.scss";
import {ArrowDownward} from '@mui/icons-material'
import { init } from 'ityped'
import { useEffect, useRef } from "react";


export default function Intro() {
  const textRef=useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:  500,
      backSpeed:  50, 
      strings: ['Web Developer', 'Designer' ] 
    }
      );
  
  }, []);
  





  return (
  
<div className='intro' id="intro">

<div className="left">
<div className="imgcontainer">
<img src="../assets/man.png" alt="" />
</div>
</div>

<div className="right">
  <div className="wrapper">
    <h2>Hi there,I'am</h2>
    <h1>Majdi Mokhtar</h1>
    <h3>Freelance <span ref={textRef}></span></h3>
  </div>
  
  <a href="#portfolio">
    <ArrowDownward className="icon"/>
  </a>
</div>


  </div>
  );
}
