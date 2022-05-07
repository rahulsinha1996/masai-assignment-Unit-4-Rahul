import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts, getProductsData } from "../Redux/actions";
import { Grid } from "./Styled";

export const CategoryCard = () => {
  const filterData=useSelector((state)=>state.filterData);
  console.log("filter",filterData)
  const category=useParams();
  const dispatch=useDispatch();
  
  useEffect(() => {
    // dispatch filter Products for every ID change
    dispatch(getProductsData())
    dispatch(filterProducts(category))
  }, [dispatch,category]);
  return (
    <Grid data-testid = "category-container">
      {filterData.map((item)=>{
          return (
            <div>
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title}/>
              <h4>{item.brand}</h4>
              <p style={{fontWeight:"bold"}}>Rs : {item.price}</p>
            </div>
          )
        })}
              
    </Grid>
  );
};
