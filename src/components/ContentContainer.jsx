import Content from "./Content"

export default function ContentContainer({text,title,image,height,width}) {
  
  const id = "ContentContainer";
  
  return(
    <div id={id} style={{height:height,width:width}}>
 
      <Content
        image={image}
        title={title}
        text={text}
      />
      
      <div>
      
      </div>
      
    </div>
  );
  
};