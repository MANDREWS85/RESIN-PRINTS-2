import Content from "./Content"
import Button from "./Button"


export default function ContentContainer({text,title,image,height,width,link}) {
  
  const id = "ContentContainer";
  
  return(
    <div id={id} style={{height:height,width:width}}>
 
      <Content
        image={image}
        title={title}
        text={text}
        height={height}
        link={link}
      />

      
      <div>
        
        
      </div>
      
    </div>
  );
  
};