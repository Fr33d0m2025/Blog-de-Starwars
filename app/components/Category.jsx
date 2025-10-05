import { useEffect, useState } from "react";
import { Card } from "./Card";

export function Category({ name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://swapi.tech/api/${name.toLowerCase()}`
      );
      const json = await response.json();
      setData(json.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h3>{name}</h3>
        <div className="d-flex p-3 overflow-x-scroll gap-4">
          {data.map((e) => (
            <Card data={e} key={e.uid} category={name.toLowerCase()} />
          ))}
        </div>
      </div>
    </>
  );
}
