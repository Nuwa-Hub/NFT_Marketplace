import React from "react";

const index = () => {
  return (
<div className="slide-show">

        <div class="box">
          <span style={{"--i": "1"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "2"}}>
            <img src="/dog1.jpg" />
          </span>
          <span style={{"--i": "3"}}>
            <img src="/dog.jpg" />
          </span>
          <span style={{"--i": "4"}}>
            <img src="/dp.jpeg" />
          </span>
          <span style={{"--i": "5"}}>
            <img src="/cover.jpg" />
          </span>
          <span style={{"--i": "6"}}>
            <img src="/blue.jpg" />
          </span>
          <span style={{"--i": "7"}}>
            <img src="/pex.jpg" />
          </span>
          <span style={{"--i": "8"}}>
            <img src="/im.jpg" />
          </span>
        </div>
</div>
  );
};

export default index;
