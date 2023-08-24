import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

import { useFetch } from "../../util-hooks/useFetch";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

export default function FavoriteMeetupList() {
  const [favorites, setFavorites] = useState([])
  const { data } = useFetch({
    url: "/data.json",
  });

  const favoriteList = useSelector((state) => state.favorites.value)

  useEffect(() => {
    if(data)
      setFavorites(data.filter((meetup) => favoriteList.includes(meetup.id)))
  }, [data, favoriteList])

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