import React, { useEffect, useState } from "react";

import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

export default function MainNavigation({ setPage }) {

  const [showNavbar, setShownavbar] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(0)

  const whenScroll = () => {
    if (window.scrollY > currentScroll) {
      setShownavbar(false)
    } else {
      setShownavbar(true)
    }

    setCurrentScroll(window.scrollY)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', whenScroll)
    }

    return () => {
      window.removeEventListener('scroll', whenScroll)
    }
  })

  return (
    <header className={`${classes.header} ${showNavbar ? classes.showHeader : ''}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/allmeetups">
              All Meetups
            </Link>
          </li>

          <li>
            <Link to="/newmeetup">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
