import React from "react";

export default function Education(props) {
  return (
    <div>
      <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16">
          <i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>
          Education
        </h2>

        {props.allInfo.map((e, index) => {
          return (
            <div class="w3-container">
              <h5 class="w3-opacity">
                <b>{e.title}</b>
              </h5>
              <h6 class="w3-text-black">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                {e.date}
              </h6>
              <p>{e.description}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
