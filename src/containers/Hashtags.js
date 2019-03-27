import React from 'react';

const Hashtags = (props) => {  
  return (
    <div className="hashtag">
      { props.hashtags.map((e,i) => <a className="hashtag__link" href="#" key={ i }>#{ e }</a>) }
    </div>
  );  
}

export default Hashtags;
