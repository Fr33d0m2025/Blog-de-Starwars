import { useState } from "react";
import { useLoaderData, useParams } from "react-router";

export async function loader({ params }) {
  const { category, uid } = params;
  const response = await fetch(`https://swapi.tech/api/${category}/${uid}`);
  const json = await response.json();
  const arr = Object.entries(json.result.properties);
  const properties = arr.filter(
    ([key, value]) =>
      !["created", "edited"].includes(key) &&
      typeof value === "string" &&
      !value.startsWith("https")
  );

  return properties;
}

export default function Details() {
  const data = useLoaderData();

  return (
    <>
      <img src="https://placehold.co/800x600" alt="image" />
      {data.map(([key, value]) => (
        <p>{`${key}: ${value}`}</p>
      ))}
    </>
  );
}