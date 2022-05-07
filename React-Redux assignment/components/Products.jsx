import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select,Grid } from "./Styled";

export const Products = () => {
  const data=useSelector((state)=>state.products);
  const dispatch=useDispatch();

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
      dispatch(getProductsData())
  }, [dispatch]);
  
  const handleSort = (e) => {
    // dispatch sort products on change
    let input=e.target.value;
    if(input==="asc"){
      data.sort(function(a,b){return b.price-a.price})
      dispatch(sortProducts(data))
    }
    if(input==="desc")
    {
      data.sort(function(a,b){return a.price-b.price})
      dispatch(sortProducts(data))
    }
  };

 
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {data.map((ele)=>{
          return (
            <ProductCard key={data.id} item={ele}/>
          )
        })}
       
      </Grid>
    </>
  );
};
