import React from "react";

const index = () => {
  return (
<div className="slide-show">

        <div class="box">
          <span style={{"--i": "1"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "2"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "3"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "4"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "5"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "6"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "7"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "8"}}>
            <img src="/dog.jpg" />
          </span>
        </div>
</div>
  );
};

export default index;
