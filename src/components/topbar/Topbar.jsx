import "./topbar.scss";
import {Person,Mail} from '@mui/icons-material'
export default function Topbar({menuOpen,setMenuopen}) {
  return (
  
  <div className={"topbar " + (menuOpen && "active")}>
<div className="wrapper">
<div className="left">
<a href="#intro" className="logo">Majdi. </a>
<div className="itemcontainer">
  <Person className="icon"/>
  <span>+216 23 889 644</span>

</div>
<div className="itemcontainer">
  <Mail className="icon"/>
  <span>majdi.mokhtar@gmail.com</span>
</div>
</div>

<div className="right">
  <div className="humberger" onClick={()=>setMenuopen(!menuOpen)}>
    <span className="line1"></span>
    <span className="line2"></span>
    <span className="line3"></span>
  </div>
</div>

</div>


  </div>);
}
