import React from 'react';

const ImageList = (props) => {
  console.log(props.images);

  const images = props.images.map(({id, urls, description}) => <li key={id} ><img src={urls.thumb} alt={description}/></li>)

  return (
    <div>
      <ul>{images}</ul>
    </div>
  );
}

export default ImageList;
