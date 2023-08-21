import { useEffect, useState } from "react";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";

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
            <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
