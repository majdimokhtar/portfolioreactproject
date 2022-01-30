import "./work.scss";
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useState } from "react";
export default function Work() {
  const [slider, setSlider] = useState(0);
  const data =[

    {
      id:"1",
      icon: <AutoGraphIcon/>,
      title:"Mobile App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae pariatur error consequuntur beatae nesciunt ex vel officiis. Sunt vitae debitis pariatur vero nobis soluta sed aspernatur esse ab a.",
      
      img:"https://cdn.dribbble.com/users/1430543/screenshots/16777122/media/290d8f5c51cbebe68326d5a6c5136cf0.png?compress=1&resize=1200x900&vertical=top",
    },
    {
      id:"2",
      icon:<AspectRatioIcon/>,
      title:"",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae pariatur error consequuntur beatae nesciunt ex vel officiis. Sunt vitae debitis pariatur vero nobis soluta sed aspernatur esse ab a.",
      img:"https://cdn.dribbble.com/users/1720295/screenshots/16367386/media/dd9904dc89806e743fd12c51f585f113.png?compress=1&resize=1200x900&vertical=top",
    },
    {
      id:"3",
      icon: <AttachmentIcon/>,
      title:"",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae pariatur error consequuntur beatae nesciunt ex vel officiis. Sunt vitae debitis pariatur vero nobis soluta sed aspernatur esse ab a.",
      img:"https://cdn.dribbble.com/users/1756963/screenshots/16199327/media/2574545a2a10397d6bb43b8001ecc585.png?compress=1&resize=1200x900&vertical=top",
    },
    {
      id:"4",
      icon: <SendToMobileIcon/>,
      title:"",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae pariatur error consequuntur beatae nesciunt ex vel officiis. Sunt vitae debitis pariatur vero nobis soluta sed aspernatur esse ab a.",
      img:"https://cdn.dribbble.com/users/1299819/screenshots/16566186/media/78189c344a73df04f7c7d4f8d7c952e4.png?compress=1&resize=1200x900&vertical=top",
    },
  ];
  //carousel code:
  const handeleClick=(way)=>{
    way==="left"? setSlider(slider>0 ? slider-1:2) :
    setSlider(slider<data.length -1 ?slider+1 :0)
  }
  return (
  <div className="work" id="work">

<div className="slider" style={{transform:`translateX(-${slider *100}vw)`}}>
  {data.map((d)=>(

  
  <div className="container">
    <div className="item">
      <div className="left">
         <div className="leftContainer">
           <div className="imgContainer">
             <span className="icon">{d.icon}</span>
           </div>
           <h2> {d.title} </h2>
           <p> {d.desc}</p>
           <span>Projects</span>

      </div>
      </div>
      <div className="right">
        <img src={d.img} alt="" />

      </div>
    </div>
    
  </div>))}
</div>
<ArrowBackIosNewIcon className="arrow left" onClick={()=>handeleClick("left")} />
<ArrowForwardIosIcon className="arrow right" onClick={()=>handeleClick("right")}/>

  </div>);
}
