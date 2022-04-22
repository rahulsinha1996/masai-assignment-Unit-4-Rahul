import React from 'react'
import styled from 'styled-components';

const CardStyle=styled.div`
    margin-top:20px;
    width:400px;
    height:200px;
    border-radius:10px;
    color:white;
    background-color:rgb(246,66,91);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    letter-spacing:5px;
    font-weight:bold;
    margin-top:20px;

    img{
        height:25px;
        width:70px;
        margin-top:20px;
        right:-100px;
        position:relative;
    }
`;
const Chip=styled.div`
img{
    height:25px;
    width:35px;
    right:100px;
    position:relative;
    margin-top:0px;
}
`
const Detail=styled.div`
    display:flex;
    font-weight:normal;
    font-size:10px;
    letter-spacing:normal;
    margin-top:-5px;
    margin-left:30px;
    gap:60px;
    text-align:left
    
`

const Card = () => {

  return (
    <CardStyle>
        <img src="https://www.pikpng.com/pngl/b/81-810129_visa-png.png" alt='logo'/>
        <Chip>
        <img src="https://www.kindpng.com/picc/m/603-6039982_sim-card-chip-png-transparent-png.png" alt='logo'/>
        </Chip>
        <p>4256 7890 5678 4532</p>
        <Detail>
            <div>
                <p>CARD HOLDER</p>
                <p>John Smith</p>
            </div>
            <div>
                <p>EXPIRES</p>
                <p>09/20</p>
            </div>
            <div>
                <p>cvc</p>
                <p>345</p>
            </div>
        </Detail>

    </CardStyle>
        
   
  )
}

export default Card