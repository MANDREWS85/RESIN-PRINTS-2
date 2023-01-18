import Content from "./Content"

export default function ContentContainer({text,title,image}) {
  
  const id = "ContentContainer";
  
  return(
    <div id={id}>
 
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