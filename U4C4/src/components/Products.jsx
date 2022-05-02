import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select,Grid } from "./Styled";

export const Products = () => {
  const data=useSelector((state)=>state.data);
  const dispatch=useDispatch()
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
      dispatch(getProductsData())
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
    
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
