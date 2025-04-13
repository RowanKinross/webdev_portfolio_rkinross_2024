  import './links.css'
  

  function Links() {
    return (
      <div className='links'>
        <a 
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link"
        href="https://www.linkedin.com/in/rowan-kinross-512940284/" target="_blank">
        <h6 className="linkedIn">LinkedIn</h6>
      </a>

      <a 
      className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link"
      href="https://github.com/RowanKinross" target="_blank">
        <h6 className="github">GitHub</h6>
      </a>

      <a 
      className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link" 
      href={`mailto:rowan.kinross@outlook.com`} target="_blank">
        <h6 className="email">rowan.kinross@outlook.com</h6>
      </a> 
      </div>
    );
  }
  
export default Links;

