import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

const PostsPage = async () => {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 p-10">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Dynamic Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-purple-700">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
