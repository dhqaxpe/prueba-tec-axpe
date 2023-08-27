
import classes from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import MainNavigation from '../common/main-navigation/MainNavigation';

export default function Layout() {
  return (
    <div className={classes.container}>
      <MainNavigation /> 
      <main className={classes.main}>
        <Outlet/>
      </main>
    </div>
  );
}
