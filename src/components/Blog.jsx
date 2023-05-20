import React from "react";

const Blog = () => {
  return (
    <div className="my-container text-justify">
      <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold tracking-tight sm:text-4xl md:mx-auto">
        Questions and Answers Section
      </h2>
      <div className="space-y-8">
        <div>
          <p className="mb-4 text-xl font-medium ">
            01. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p>
            Context provides a way to pass data through the component tree
            without having to pass props down manually at every level. It is
            used only when we need to share state between lot's of components
            with a lot of nesting. Actually, managing state is an essential part
            of developing applications in React. A common way to manage state is
            by passing props. Passing props means sending data from one
            component to another. It's a good way to make sure that data gets to
            the right place in a React application. But it can be annoying to
            pass props when you have to send the same data to lots of components
            or when components are far away from each other. This can make an
            application slower and harder to work with. To solve this issue,
            React provides a built-in feature known as the context API that
            helps us to send data without passing props.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium">
            02. Compare SQL and NoSQL databases?
          </p>
          <p>
            The main reason to write a custom hook is for code reusability. For
            example, instead of writing the same code across multiple components
            that use the same common stateful logic, we can put that code inside
            a custom hook and reuse it. Besides, when we have multiple
            components that use like the activities data. These components will
            have the loading state and the activities state in common. Here’s
            where we want to extract the shared state and the shared useEffect
            fetch hook into our own custom hook so we don’t repeat it. This way
            we can keep our components as simple as possible and isolate the
            testable logic in a custom hook function, as well as making shared
            logic between components reusable.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium ">
            03. What is express js? What is Nest JS?
          </p>
          <p>
            useRef is a built-in React hook that accepts one argument as the
            initial value and returns a reference. A reference is an object
            having a special property current. So, in short, we can say that the
            useRef Hook lets us create mutable variables inside functional
            components. There are three main key points that you should keep in
            mind when using the useRef Hook: A ref created with useRef will be
            created only when the component has been mounted and preserved for
            the full lifecycle. Refs can be used for accessing DOM nodes or
            React elements, and for storing mutable variables (like with
            instance variables in class components). Updating a ref is a side
            effect so it should be done only inside a useEffect (or
            useLayoutEffect) or inside an event handler.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium">
            04. What is MongoDB aggregate and how does it work?
          </p>
          <p>
            useMemo is a React Hook that lets you cache the result of a
            calculation between re-renders.In fact, the useMemo is a hook used
            in the functional component of react that returns a memoized value.
            In Computer Science, memoization is a concept used in general when
            we don’t need to recompute the function with a given argument for
            the next time as it returns the cached result. A memoized function
            remembers the results of output for a given set of inputs. For
            example, if there is a function to add two numbers, and we give the
            parameter as 1 and 2 for the first time the function will add these
            two numbers and return 3, but if the same inputs come again then we
            will return the cached value i.e 3 and not compute with the add
            function again. In react also, we use this concept, whenever in the
            React component, the state and props do not change the component and
            the component does not re-render, it shows the same output. The
            useMemo hook is used to improve performance in our React
            application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
