import React from 'react';

const Navbar = () => {
  return (
    <header className="nav nav-header">
      <h1>JSON API</h1>
      <nav className="navigation">
        <ul>
          <li className="list-items">
            <a href="/">Home</a>
          </li>
          <li className="list-items">
            <a href="/2">Two</a>
          </li>
          <li className="list-items">
            <a href="/3">Three</a>
          </li>
          <li className="list-items">
            <a href="/4">Four</a>
          </li>
          <li className="list-items">
            <a href="/5">Five</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;