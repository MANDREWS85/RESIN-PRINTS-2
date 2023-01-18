export default function Banner({linkTitle,text,link,image}) {

  const id = "Banner";
  
  return(
    <div id={id}>
      <h1>BANNER</h1>
      <a href={link}> <h1>{linkTitle}</h1> </a>
      <h3>{text}</h3>
    </div>

    
  );

  
}