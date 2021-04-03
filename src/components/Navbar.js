import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-navbar-custom">
  <Link to="/" class="navbar-brand">Forged App</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/analyze" class="nav-link">Analyze Image</Link>
      </li>
      <li class="nav-item">
        <Link to="/news" class="nav-link">News</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
