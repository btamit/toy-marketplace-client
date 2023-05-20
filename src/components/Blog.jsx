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
            system takes care of how to retrieve it. <br />
            Structure: NoSQL databases are schema-less or have a flexible
            schema. They store data in various formats like key-value pairs,
            documents, column families, or graphs. This flexibility allows for
            agile development and handling unstructured or semi-structured data.
            Scalability: NoSQL databases are designed for horizontal
            scalability. They can distribute data across multiple servers,
            allowing them to handle large amounts of data and high read/write
            loads. They often provide automatic sharding and replication
            mechanisms. Performance: NoSQL databases excel in handling
            large-scale data and high-velocity workloads. They prioritize
            performance and scalability over strict data consistency, making
            them suitable for applications with high throughput and real-time
            requirements.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium ">
            03. What is express js? What is Nest JS?
          </p>
          <p>
            Express.js is a minimal and flexible web application framework for
            Node.js. It provides a simple and unopinionated set of tools for
            building web applications and APIs. Express.js allows developers to
            define routes, handle HTTP requests and responses, and implement
            middleware functions to add functionality to their applications. It
            has a lightweight core and a vast ecosystem of middleware and
            extensions, making it highly customizable. Express.js is well-suited
            for small to medium-sized applications that require flexibility and
            a lightweight framework. <br />
            Nest.js: Nest.js is a progressive, opinionated, and full-featured
            web framework for building scalable and maintainable server-side
            applications. It is built with TypeScript and takes inspiration from
            Angular's architecture and concepts. Nest.js provides a higher level
            of abstraction compared to Express.js and promotes a modular and
            structured approach to building applications. It offers features
            like dependency injection, modules, decorators, middleware, and
            built-in support for features like routing, validation,
            authentication, and database integration. Nest.js is designed for
            building complex, enterprise-grade applications with a focus on
            maintainability and extensibility.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium">
            04. What is MongoDB aggregate and how does it work?
          </p>
          <p>
            In MongoDB, the aggregate framework is a powerful tool used for data
            aggregation operations. It allows you to process and analyze data
            from multiple documents in a collection and perform operations like
            grouping, filtering, projecting, and computing aggregate values. The
            aggregate framework works on the principle of a pipeline, where
            multiple stages are applied sequentially to transform and manipulate
            the data. <br />
            01.Pipeline Stages:$group: Groups documents by a specific field and
            performs aggregations within each group. $project: Reshapes the
            documents by specifying which fields to include or exclude. $sort:
            Sorts the documents based on specified criteria. $limit: Limits the
            number of documents to be processed. $skip: Skips a specified number
            of documents. <br />
            02. Processing Order: The pipeline stages are executed in the order
            they appear in the pipeline. The output of one stage becomes the
            input for the next stage, allowing you to chain operations together. <br/>
            03.Aggregation Operators: The aggregate framework provides a wide range
            of operators that you can use within pipeline stages to perform
            various computations, transformations, and aggregations. Some
            examples include: Arithmetic operators: $add, $subtract, $multiply,
            etc. Comparison operators: $eq, $ne, $gt, $lt, etc. Array operators:
            $size, $push, $addToSet, etc. Accumulators: $sum, $avg, $min, $max,
            etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
