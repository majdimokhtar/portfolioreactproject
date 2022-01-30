import "./menu.scss";

export default function Menu({menuOpen,setMenuopen}) {
  return (
  <div className={"menu "+(menuOpen && "active")}>
      <ul>
<li onClick={()=>setMenuopen(false)}>
    <a href="#intro">Home</a>
</li>
<li onClick={()=>setMenuopen(false)}>
    <a href="#portfolio">Portfolio</a>
</li>
<li onClick={()=>setMenuopen(false)}>
    <a href="#work">Works</a>
</li>
<li onClick={()=>setMenuopen(false)}>
    <a href="#testimonials">Testimonials</a>
</li>
<li onClick={()=>setMenuopen(false)}>
    <a href="#contact">Contact</a>
</li>

      </ul>


  </div>);
}
