import React from "react";
import { Link } from "react-router-dom";

function Card({ users, username, website, userId }) {
  return (
    <>
      <div className="card text-center my-4 py-3">
        <h3 className="rounded-circle avatar ">{users.substring(0, 1)}</h3>
        <div className="card-body">
          <h5 className="card-text text-dark ">{users}</h5>
          <h6 className="card-text text-secondary">@{username}</h6>
          <p>
            <em>
              <Link to="/">http://{website}</Link>
            </em>
          </p>
          <Link
            to={`/users/${userId}`}
            className="btn btn-primary btn-lg btn-block rounded mt-5"
          >
            More details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
