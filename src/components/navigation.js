import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, NavbarToggler, Nav, NavItem, Collapse } from "shards-react"

export const Navigation = ({ currentPage }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navbar sticky="top" type="dark" theme="secondary" expand="md">
      <Link to="/" className="navbar-brand">
        <img className="m-0" src="/images/logo.svg" alt="pwa shields logo" />
      </Link>

      <NavbarToggler
        onClick={() => setNavbarOpen(prevState => !prevState)}
        aria-label="mobile navigation"
      />

      <Collapse open={navbarOpen} navbar>
        <Nav navbar>
          <NavItem>
            <Link
              to="/"
              className={`nav-link ${currentPage === "home" && "active"}`}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/series"
              className={`nav-link ${currentPage === "series" && "active"}`}
            >
              Series
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/create"
              className={`nav-link ${currentPage === "create" && "active"}`}
            >
              Create
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
}
