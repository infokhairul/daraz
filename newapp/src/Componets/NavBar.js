import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div>
        
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
       
        </div>

       
    )
}

export default NavBar;
