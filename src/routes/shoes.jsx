import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("http://localhost:3000/shoe");
  const json = await response.json();

  return {
    shoes: json,
  };
}

function PageShoes() {
  const data = useLoaderData();

  return (
    <ol>
      {data.shoes.map((shoe) => (
        <li key={shoe.id}>
          <h3>{shoe.name}</h3>
          <p>{shoe.merk}</p>
          <p>{shoe.qty}</p>
          <p>{shoe.available ? "Ada" : "Kosong"}</p>
        </li>
      ))}
    </ol>
  );
}

export default PageShoes;
