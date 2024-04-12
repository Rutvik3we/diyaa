import React, { Component } from 'react'

export class Navbar extends Component {
    handleLogout() {
        window.location.href = '/';}
  render() {
    return (
      <div>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home" activeClassName="active">community connect</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item">
            <a class="nav-link" href="/profile" activeClassName="active">Profile</a>
          </li>
                   
          <li class="nav-item">
            <a class="nav-link" href="/register" activeClassName="active">register</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/getallmembers" activeClassName="active">Community Members</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
              Ads
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/showads" activeClassName="active">Advertise</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/advertise" activeClassName="active">Add Advertise</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
              Education
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/inserteducation" activeClassName="active">inserteducation</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/education" activeClassName="active">education</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/updateeducation" activeClassName="active"> update education</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
              Family Members
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/insertmembers" activeClassName="active">insert familymembers</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/showmembers" activeClassName="active">FamilyMembers</a></li>
            </ul>
          </li>
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
              Occupation
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/showoccupation" activeClassName="active">showoccupation</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/insertoccupation" activeClassName="active">Add occupation</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
              Events
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/showevents" activeClassName="active">showoevents</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/insertevents" activeClassName="active">Add events</a></li>
            </ul>
          </li>
         
         
        </ul>
        
          
          <button class="btn btn-outline-success" onClick={this.handleLogout}>Logout</button>
        
      </div>
    </div>
  </nav> 
      </div>
    )
  }
}

export default Navbar
