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
            Access Token: An access token is a credential that represents the
            authorization to access specific resources or perform certain
            actions within a system. It is typically issued by an authentication
            server (such as OAuth or OpenID Connect) after a user successfully
            logs in or authorizes an application. The access token is then sent
            along with each subsequent request to the server, allowing the
            server to validate the token and grant access to the requested
            resources. Refresh Token: A refresh token is a long-lived credential
            that is also issued by the authentication server. It is used to
            obtain a new access token once the current one expires. Instead of
            requiring the user to authenticate again, the refresh token can be
            sent to the authentication server to get a new access token without
            prompting the user for their credentials. Refresh tokens are usually
            used to maintain a user's session and provide a seamless user
            experience.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium">
            02. Compare SQL and NoSQL databases?
          </p>
          <p>
            Structure: SQL databases are based on a structured and predefined
            schema. They use tables with rows and columns to organize and store
            data. Each row represents a record, and each column represents a
            data attribute. Data Integrity: SQL databases enforce strong data
            consistency and integrity through features such as primary keys,
            foreign keys, and constraints. This ensures that data follows
            predefined rules and relationships. Query Language: SQL databases
            use SQL as the standard query language for performing operations
            like selecting, inserting, updating, and deleting data. SQL provides
            a declarative way to specify what data is needed, and the database
            system takes care of how to retrieve it. <br/>
            Structure: NoSQL databases
            are schema-less or have a flexible schema. They store data in
            various formats like key-value pairs, documents, column families, or
            graphs. This flexibility allows for agile development and handling
            unstructured or semi-structured data. Scalability: NoSQL databases
            are designed for horizontal scalability. They can distribute data
            across multiple servers, allowing them to handle large amounts of
            data and high read/write loads. They often provide automatic
            sharding and replication mechanisms. Performance: NoSQL databases
            excel in handling large-scale data and high-velocity workloads. They
            prioritize performance and scalability over strict data consistency,
            making them suitable for applications with high throughput and
            real-time requirements.
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
