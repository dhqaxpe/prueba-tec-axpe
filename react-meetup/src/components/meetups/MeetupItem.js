import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useEffect, useState } from "react";

export default function MeetupItem(props) {
  const [isOnFavorites, setIsOnFavorites] = useState(localStorage.getItem(props.id) ? true : false)

  useEffect(() => {
    if (isOnFavorites) { 
      localStorage.setItem(props.id, props.id)
    } else {
      localStorage.removeItem(props.id, props.id)
    }
  }, [isOnFavorites, props.id])

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        {!isOnFavorites
          ? 
          <div className={classes.actions}>
            <button onClick={() => setIsOnFavorites(true)}>Add to favorites</button>
          </div>
          :
          <div className={classes.actions}>
            <button onClick={() => setIsOnFavorites(false)}>Remove from favorites</button>
          </div>
        }
      </Card>
    </li>
  );
}
