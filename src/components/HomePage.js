import React from "react";
import Card from "./Card";

import "../App.css";

function HomePage({ users }) {
  return (
    <>
      <div className="container">
        <h1 className="text-center p-5">Pre Assingment User API</h1>
        <div className="row">
          {users.map((user, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Card
                userId={user.id}
                users={user.name}
                username={user.username}
                email={user.email}
                website={user.website}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
