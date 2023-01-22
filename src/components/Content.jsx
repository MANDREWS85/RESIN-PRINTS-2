import Button from "./Button"

export default function Content({image,title,text,height,width,link}) {
  const id = "Content"

  return(
    <div id={id} style={{backgroundImage:"url('" + image + "')",height:height,width:width}}>
      <div style={{height:"10px"}}></div>
      <a href={link} target="_blank" ><h3>{title}</h3></a>
      <p>{text}</p>
      
      <Button 
        text="BUY NOW"
        link="https://www.ebay.com/itm/225352439758"
      />
    
    
    </div>
    
  );
  
}