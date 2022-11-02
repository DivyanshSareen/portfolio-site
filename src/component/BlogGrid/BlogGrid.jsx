import React from "react";

const BlogGrid = () => {
  const blogs = [
    {
      id: 0,
      name: "JavaScript Objects and Prototypes",
      desc: "The World of Pokemon through the lens of OOPs",
      url: "https://divyanshsareen.hashnode.dev/javascript-objects-and-prototypes",
    },
    {
      id: 1,
      name: "Ways to Traverse a Matrix",
      desc: "Row-wise, Column-wise, DFS, BFS and more!",
      url: "https://divyanshsareen.hashnode.dev/matrix-travel",
    },
    {
      id: 2,
      name: "Nth Fibonacci Number",
      desc: "My Learnings and Findings",
      url: "https://divyanshsareen.hashnode.dev/nth-fibonacci-number",
    },
  ];
  return (
    <>
      {blogs.map((blog) => (
        <a href={blog.url} target="_blank">
          <div key={blog.id} className="blog-card">
            <div className="blog-title">{blog.name}</div>
            <div className="blog-desc">{blog.desc}</div>
          </div>
        </a>
      ))}
    </>
  );
};

export default BlogGrid;
