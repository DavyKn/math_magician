import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import './styles.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="title">
        Math Magicians
      </h2>
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/calculator">calculator</CustomLink>
        <CustomLink to="/Quote">Quote</CustomLink>
      </ul>
    </nav>
  );
}
/* eslint-disable */
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
