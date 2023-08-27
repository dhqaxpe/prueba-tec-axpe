import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../utils/favoriteReducer";

export default function MeetupItem(props) {
  const favorites = useSelector((state) => state.favorites.value)
  const dispatch = useDispatch()

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
        {!favorites.includes(props.id)
          ? 
          <div className={classes.actions}>
            <button onClick={() => dispatch(add(props.id))}>Add to favorites</button>
          </div>
          :
          <div className={classes.actions}>
            <button onClick={() => dispatch(remove(props.id))}>Remove from favorites</button>
          </div>
        }
      </Card>
    </li>
  );
}
