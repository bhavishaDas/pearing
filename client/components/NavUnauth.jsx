import React from 'react'
import { Link } from 'react-router-dom'
import { IfNotAuthenticated } from './Authenticated'

export default function NavUnauth(props) {
  let currentPage = props.location.pathname
  let navLandingUnauth = null

  switch (currentPage) {
    case '/':
      navLandingUnauth = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    case '/about':
      navLandingUnauth = (
        <>
         <Link to="/contact">Contact</Link>
         <Link to="/">Welcome</Link>
         <Link to="/signin">Sign in</Link>
        <Link to="/register">Register</Link>
        </>
      )
      break
    case '/contact':
      navLandingUnauth = (
        <>
          <Link to="/about">About</Link>
          <Link to="/">Welcome</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    case '/signin':
      navLandingUnauth = (
        <>
          <Link to="/">Welcome</Link>
          <Link to="/register">Register</Link>
        </>
      )
      break
    default:
      navLandingUnauth = (
        <>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </>
      )
  }
  return (
    <>
      <div className="nav">
        <IfNotAuthenticated>
          {navLandingUnauth}
        </IfNotAuthenticated>
      </div>
    </>
  )
}