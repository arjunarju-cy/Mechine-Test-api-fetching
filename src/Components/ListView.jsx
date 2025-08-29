import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 12)));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            to={`/detail/${post.id}`}
            key={post.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-indigo-600">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-3">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

