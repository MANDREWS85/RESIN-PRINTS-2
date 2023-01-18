//import Button from "/Button";

export default function Product({name,description,image,link}) {
  const id="Product"
return(
  <div id={id} style={{backgroundImage:"url('" + image + "')",backgroundSize:"100% 100%",height:"300px",maxWidth:"300px"}}>
    <a href={link} target="_blank">
      <h3>{name}</h3>
      <p>{description}</p>

    </a>
  </div>
)
  
};