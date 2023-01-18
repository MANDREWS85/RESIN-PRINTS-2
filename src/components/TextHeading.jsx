export default function TextHeading({text,link}) {
  const id = "TextHeading";

  return(
    <div id={id}>

      <a href={link}><h1 style={{}}>{text}</h1></a>
    
    </div>
    
  );
  
} 