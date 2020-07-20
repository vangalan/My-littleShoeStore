import React from 'react'


 export default class Nav extends React.Component {
     render(){
     return(
        <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <a href="#!">🐐 GOAT Johnson's Clothing</a>
          </div>
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle" href="#!"></a>
            </div>
            <ul class="nav-list">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Shop</a></li>
              <li>
                <a href="#!">Services</a>
                <ul class="nav-dropdown">
                  <li><a href="#!">Web Design</a></li>
                  <li><a href="#!">Web Development</a></li>
                  <li><a href="#!">Graphic Design</a></li>
                </ul>
              </li>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>
     )
     }

}