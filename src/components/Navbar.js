import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-navbar-custom">
        <a class="navbar-brand" href="#">Forged App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Analyze</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar