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
  const params = useParams();
  const { category } = params;
  console.log(data, category);

  return (
    <div className="container">
      {data.map(([key, value], i) => (
        <>
          {key == "name" && (
            <img
              src={`/images/${category}/${value.toLowerCase().replace("/", "-").split(" ").join("-")}.jpg`}
              className="object-fit-contain"
            />
          )}
          <p key={i}>{`${key}: ${value}`}</p>
        </>
      ))}
    </div>
  );
}
