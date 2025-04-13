  import { useState } from 'react';
  import './contact.css'
  import emailjs from '@emailjs/browser';
  
  function Contact() {
    // Setting the component's initial state
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (event) => {
      // Getting the value and name of the input which triggered the change
      const value = event.target.value;
      const name = event.target.name;
  
      // Updating the input's state
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // function for when the form has been submitted
    const handleFormSubmit = (e) => {
      e.preventDefault();

      // set parameters from the inputs
      let templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        email: formData.email,
        message: formData.message,
      };
  
      // make sure all fields have been filled in
      if(!formData.firstName || !formData.lastName || !formData.email || !formData.message){
        alert(`Please fill out all fields`)
      } else {
        emailjs.send("service_9kw7gk4","template_0393pm3", templateParams)
        .then(
          (response) => {
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
        // clear input fields
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          message: '',
        });
      };
      }




    // return the following html
    return (
      <div className='contact'>
        <p className='m-0'>
          If you'd like to get in touch, please fill out the form below:
        </p>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <script type="text/javascript">
            (function() {emailjs.init({publicKey: "8BoZbrrTGoqERZRyu"})});
            ();
        </script>

        <form className="form formContainer" id='form' onSubmit={handleFormSubmit}>

          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col-sm-12 col-lg-6">
              <input
              value={formData.firstName}
              name="firstName"
              id="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
              />
            </div>
         </div>

         <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="col-sm-12 col-lg-6">
              <input
                value={formData.lastName}
                name="lastName"
                id="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
              />
            </div>
         </div>

         <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="company">Company/Organisation</label>
            </div>
            <div className="col-sm-12 col-lg-6">
              <input
                value={formData.company}
                name="company"
                id="company"
                onChange={handleInputChange}
                type="text"
                placeholder="Company/Organisation"
              />
            </div>
         </div>

         <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-sm-12 col-lg-6">
              <input
                value={formData.email}
                name="email"
                id="email"
                onChange={handleInputChange}
                type="text"
                placeholder="Email"
              />
            </div>
         </div>

         <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="message">Message</label>
            </div>
            <div className="col-sm-12 col-lg-6">
                <textarea className='message'
                value={formData.message}
                name="message"
                id="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                />
            </div>
         </div>

          <br/>
          <button type="submit" className='btn submitForm'>Submit</button>
        </form>
      </div>
    );
  }
  
export default Contact;

