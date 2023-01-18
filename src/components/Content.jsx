export default function Content({image,title,text}) {
  const id = "Content"

  return(
    <div id={id} style={{backgroundImage:"url('" + image + "')"}}>
      <div style={{height:"10px"}}></div>
      <h3>{title}</h3>
      <p>{text}</p>
      {image}
    
    
    
    </div>
    
  );
  
}