import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <Link
          to="/list"
          className="inline-block mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
}
