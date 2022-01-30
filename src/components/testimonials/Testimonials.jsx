import "./testimonials.scss";
import YouTubeIcon from '@mui/icons-material/YouTube';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faYoutube,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'


export default function Testimonials() {

  const data =[

    {
      id:"1",
      name:"Houcem",
      icon: <FontAwesomeIcon icon={faYoutube} style={{color:'#FF0000'}}/>,
      title:"CEO",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae pariatur error consequuntur beatae nesciunt ex vel officiis. Sunt vitae debitis pariatur vero nobis soluta sed aspernatur esse ab a.",
      
      img:"https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912762/62358482-avatar-man-smiling-cartoon-male-person-user-vector-illustration.jpg",
      featured:true
    },
    {
      id:"2",
      name:"Ala",
      icon:<FontAwesomeIcon icon={faLinkedin} style={{color:'#0a9396'}}/>,
      title:"CEO",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae pariatur error consequuntur beatae nesciunt ex vel officiis. Sunt vitae debitis pariatur vero nobis soluta sed aspernatur esse ab a.",
      img:"https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg",
    },
    {
      id:"3",
      name:"Imen",
      icon: <FontAwesomeIcon icon={faTwitter} style={{color:'#0077b6'}}/>,
      title:"CEO",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae pariatur error consequuntur beatae nesciunt ex vel officiis. Sunt vitae debitis pariatur vero nobis soluta sed aspernatur esse ab a.",
      img:"https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png",
    },
    
  ];


  return (
  
  <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      {data.map(d=>(
      <div className={d.featured? "card featured" : "card"} >
        <div className="top">
        {d.icon}
        <img className="user"
         src={d.img} alt="" />
        <FontAwesomeIcon icon={faArrowLeft} className="right"/>
        </div>
        <div className="center">
          {d.desc}
        </div>
        <div className="bottom">
          <h3> {d.name} </h3>
          <h4> {d.title} </h4>
        </div>
      </div>
      ))}
    </div>


  </div>
  );
}
