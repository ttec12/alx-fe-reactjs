// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to load posts");
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    isPending,   // v5 way
    isLoading,   // alias (some checks expect this)
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5_000,
    gcTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  // Use either isPending or isLoading (both will be true on first load)
  if (isLoading || isPending) return <p>Loading posts…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Posts</h1>
      <button
        onClick={() => refetch()}
        className="px-3 py-1 mb-4 bg-blue-600 text-white rounded"
      >
        Refetch Posts
      </button>
      {isFetching && <p className="text-gray-500">Updating…</p>}
      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="p-2 border rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
