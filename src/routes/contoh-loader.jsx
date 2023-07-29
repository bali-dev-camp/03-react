import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();

  return {
    posts: json,
  };
}

function PageContohLoader() {
  const data = useLoaderData();

  return (
    <ol>
      {data.posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ol>
  );
}

export default PageContohLoader;
