import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

import { useFetch } from "../../util-hooks/useFetch";
import { useEffect, useState } from "react";


export default function FavoriteMeetupList() {
  const [favorites, setFavorites] = useState([])
  const { data } = useFetch({
    url: "/data.json",
  });

  useEffect(() => {
    if(data)
      setFavorites(data.filter((meetup) => localStorage.getItem(meetup.id)))
  }, [data, favorites])

  if (!data) return <p>Loading...</p>;

  return (
      <ul className={classes.list}>
        {favorites.map((d,i) => {
          return (
            <MeetupItem id={d.id} image={d.image} title={d.title} address={d.address} description={d.description}/>
          )
        })}
      </ul>
  );
}