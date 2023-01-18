export default function Banner({linkTitle,text,link,image}) {

  const id = "Banner";
  
  return(
    <div id={id} style={{backgroundImage:"url('" + image + "')"}}>
      <div style={{height:"10px"}}></div>
      <a href={link}> <h1>{linkTitle}</h1> </a>
      <h3>{text}</h3>
    </div>

    
  );

  
}