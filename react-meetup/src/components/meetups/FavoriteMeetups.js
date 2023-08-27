import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

import { useFetch } from "../../util-hooks/useFetch";
import { useSelector } from "react-redux";

export default function FavoriteMeetupList() {
  const { data } = useFetch({
    url: "/data.json",
  });

  const favoriteList = useSelector((state) => state.favorites.value)

  if (!data) return <div>Loading your favorite Meetups...</div>;

  if (favoriteList.length <= 0) {
    return (
      <div>
        <h3>Favorite List empty</h3>
        <p>Choose your favorites from our <a href="/">Meetups List</a></p>
      </div>
    )
  }

  return (
      <ul className={classes.list}>
        {data.filter((meetup) => favoriteList.includes(meetup.id)).map((d,i) => {
          return (
            <MeetupItem id={d.id} image={d.image} title={d.title} address={d.address} description={d.description}/>
          )
        })}
      </ul>
  );
}