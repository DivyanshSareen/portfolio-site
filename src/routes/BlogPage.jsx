import React from "react";

const BlogPage = () => {
  const blogs = [
    {
      id: 0,
      name: "JavaScript Objects and Prototypes",
      desc: "The World of Pokemon through the lens of OOPs",
    },
    {
      id: 1,
      name: "Ways to Traverse a Matrix",
      desc: "Row-wise, Column-wise, DFS, BFS and more!",
    },
    { id: 2, name: "Nth Fibonacci Number", desc: "My Learnings and Findings" },
  ];
  console.log(blogs)
  return (
    <section className="blog-grid">
      {blogs.map((blog) => 
        <div key={blog.id} className="blog-card">
          <div className="blog-title">{blog.name}</div>
          <div className="blog-desc">{blog.desc}</div>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
