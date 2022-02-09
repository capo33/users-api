import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Button from "./Button";

function UserDetails({ users }) {
  const { id } = useParams();
  console.log(id);
  return (
    <section className="full">
      <div className="user_container">
        {users
          .filter((user) => user.id === parseInt(id))
          .map((item, index) => (
            <div key={index} className="detail_card my-4 py-3">
              <h5>name: {item.name}</h5>
              <h5>username: {item.username}</h5>
              <h5>email: {item.email}</h5>
              <h5>phone: {item.phone}</h5>
              <h5>company: {item.company.name}</h5>
              <h5>website: {item.website}</h5>
              <h5>
                adsress:
                <ul>
                  {" "}
                  <li>street{item.address.city}</li>
                  <li>suite: {item.address.suite}</li>
                  <li>city: {item.address.city}</li>
                  <li>zipcode: {item.address.zipcode}</li>
                </ul>
              </h5>
              <Button />
              {/* <Link className="btn btn-outline-secondary" to="/">
                back
              </Link> */}
              {/* <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn btn-outline-secondary"
              >
                back
              </button> */}
            </div>
          ))}
      </div>
    </section>
  );
}

export default UserDetails;
