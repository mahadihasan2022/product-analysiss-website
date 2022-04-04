import React from "react";
import './Blogs.css';


const Blogs = () => {
  return (
    <div className="information">
      <div>
        <h1 className="text-2xl font-bold p-12">
          What is context api and how it works?
        </h1>
        <p className="text-lg">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on.Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-12">What is semantic tag?</h1>
        <p className="text-lg">
          Semantic HTML or semantic markup is HTML that introduces meaning to
          the web page rather than just presentation. For example, a tag
          indicates that the enclosed text is a paragraph. This is both semantic
          and presentational because people know what paragraphs are, and
          browsers know how to display them.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-12">
          What is different between inline vs inline-block vs block elements?{" "}
        </h1>
        <p className="text-lg">
          Inline The element doesn't start on a new line and only occupy just
          the width it requires. You can't set the width or height. inline-block
          It's formatted just like the inline element, where it doesn't start on
          a new line. BUT, you can set width and height values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
