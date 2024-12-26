import React from "react";
import Heading from "../../common/Heading";
import BlogCard from "../blog/BlogCard";
import "./blog.css";

const Blog = () => {
  return (
    <>
    <section className="blog padding">
      <section className= 'blog-out mb'>
          <Heading 
            title='Recent Property Listed' 
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
          />
          <BlogCard />
      </section></section>
    </>
  );
}

export default Blog;