import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

import { useFetch } from "../../util-hooks/useFetch";


export default function MeetupList() {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  return (
      <ul className={classes.list}>
        {data.map((d,i) => {
          return (
            <MeetupItem id={d.id} image={d.image} title={d.title} address={d.address} description={d.description}/>
          )
        })}
      </ul>
  );
}