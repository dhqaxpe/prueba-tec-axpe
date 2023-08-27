import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

export default function MainNavigation() {

  const [showNavbar, setShownavbar] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(0)

  const favoriteList = useSelector((state) => state.favorites.value)

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
            <Link to="/">
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
              <span className={classes.badge}>{favoriteList.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
