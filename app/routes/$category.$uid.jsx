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

  const nameEntry = data.find(([key]) => key === "name");
  const imageName = nameEntry ? nameEntry[1] : "";

  return (
    <div className="container">
      <div className="d-flex justify-content-center my-4">
        <img
          src={`/images/${category}/${imageName.toLowerCase().replace("/", "-").split(" ").join("-")}.jpg`}
          className="object-fit-cover rounded"
          height="400"
          width="400"
        />
      </div>
      <table className="table table-striped table-bordered">
        <tbody>
          {data.map(([key, value], i) => (
            <tr key={i}>
              <th className="text-capitalize">{key.replace(/_/g, " ")}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
