function Project({title, image, deployed, github}) {

  function ifDeployed() {
      if (deployed != "") {
        return (<a href={deployed} target="_blank"> here </a>)
      } else {
        return "n/a"
      }
  }


  return (
      <div className="content">
      <div className="img-container projectImageContainer">
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
            Deployed Page: {ifDeployed()}
          </li>
          <li className="projectLi">
            GitHub Repository:<a href={github} target="_blank"> here</a>
          </li>
        </ul>
      </div>
  );
}

export default Project;
