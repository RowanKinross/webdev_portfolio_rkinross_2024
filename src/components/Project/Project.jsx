function Project({title, image, deployed, github}) {

  function ifDeployed() {
      if (deployed != "") {
        return (<a href={deployed} target="_blank"> Deployed Page  </a>)
      } else {
        return ""
      }
  }


  return (
      <div className="content" style={{ border: '2px solid red', padding: '10px', minHeight: '200px' }}>
      <div className="img-container">
        <img className="projectImage"
          alt={title}
          src={image}
        />
      </div>
        <ul>
          <li>
            <strong>{title}</strong>
          </li>
          <li className="projectLi">
           {ifDeployed()}
          </li>
          <li className="projectLi">
            <a href={github} target="_blank"> Repository</a>
          </li>
        </ul>
      </div>
  );
}

export default Project;
