import React from "react";

export default function Experience(props) {
  return (
    <div>
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16">
          <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>
          Work Experience
        </h2>
        {props.allInfo.map((e, index) => {
          return (
            <div class="w3-container" key={index}>
              <h5 class="w3-opacity">
                <b>{e.title}</b>
              </h5>

              <h6 class="w3-text-black">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                {e.date}
              </h6>
              {e.current ? (
                <span class="w3-tag w3-black w3-round">Current</span>
              ) : (
                ""
              )}
              <p>{e.description}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
