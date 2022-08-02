import React from "react";
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link className="navbar-brand" to='/' style={{color:'white' , marginLeft:'50px'}}>Uzair.</Link>
    {/* <button className='btn btn-dark' style={{border:'1px solid white' , marginRight:'100px'}}>
        <Link to='/' style={{textDecoration:'none'}}>Login</Link>
    </button> */}
  </div>
</nav>
    </>
  );
};

export default Nav;
