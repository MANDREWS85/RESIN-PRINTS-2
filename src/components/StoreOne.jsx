import Product from "./Product"

export default function StoreOne() {
  const id = "StoreOne"

  return(
    <div id={id}>
      <h3>{id}</h3>

      <Product 
        image=""
        link="#"
        name="PRODUCT ONE"
        description="DESCRIPTION"
      />

      <Product 
        image=""
        link="#"
        name="PRODUCT THREE"
        description="DESCRIPTION"
      />

      <Product 
        image=""
        link="#"
        name="PRODUCT THREE"
        description="DESCRIPTION"
      />
      
    </div>
    
  );


  
}