import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" >
        {/* display item info here  */}
               
            <div>
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title}/>
              <h4>{item.brand}</h4>
              <p style={{fontWeight:"bold"}}>Rs : {item.price}</p>
            </div>
         
            
     
      </Flex>
    </>
  );
};
