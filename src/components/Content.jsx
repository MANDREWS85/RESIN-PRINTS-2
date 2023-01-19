export default function Content({image,title,text,height,width}) {
  const id = "Content"

  return(
    <div id={id} style={{backgroundImage:"url('" + image + "')",height:height,width:width}}>
      <div style={{height:"10px"}}></div>
      <h3>{title}</h3>
      <p>{text}</p>
      
    
    
    
    </div>
    
  );
  
}