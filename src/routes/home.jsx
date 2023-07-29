import { useEffect, useState } from "react";

function PageHome() {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();

      if (!ignore) {
        console.log(json);
        setPosts(json);
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  // return (
  //   <div>
  //     {loading ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <ol>
  //         {posts.map((post) => (
  //           <li key={post.id}>
  //             <h3>{post.title}</h3>
  //             <p>{post.body}</p>
  //           </li>
  //         ))}
  //       </ol>
  //     )}
  //   </div>
  // );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ol>
  );
}

export default PageHome;
