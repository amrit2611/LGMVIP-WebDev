import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div class="column">
            <div class="image">
              <img src={user.avatar} alt=""></img>
              <div class="details">
                <h2>
                  {user.first_name}
                  <span>{user.last_name}</span>
                </h2>
                <p>{user.email}</p>
                <div class="more">
                  <a href="#services" class="read-more">
                    Learn <span>More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
