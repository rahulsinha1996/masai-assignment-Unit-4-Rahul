import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20}}>
      <Link className="active" to="/">Home</Link>
      <Link className="active" to="/about">About</Link>
      <Link className="active" to="/products">Products</Link>
      <Link className="active" to="/products/men">Men</Link>
      <Link className="active" to="/products/women">Women</Link>
      <Link className="active" to="/products/kids">Kids</Link>
      <Link className="active" to="/products/homedecor">Home decor</Link>
      


    </nav>
  );
};
