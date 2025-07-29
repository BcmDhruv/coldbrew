import React from 'react';
import { useForm } from 'react-hook-form';
import "../Styles/ContactUs.css"
import emailjs from 'emailjs-com';


const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      interests: data.interests || [] // array of interests
    };

    emailjs.send(
      'service_7su47ay',     // 🔁 replace with your actual EmailJS Service ID
      'template_c3pnmt9',    // 🔁 replace with your actual Template ID
      templateParams,
      'gz7tVuaStfxhLphul'      // 🔁 replace with your actual Public Key
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Thank you! Your message has been sent.");
        reset(); // clear form
      },
      (err) => {
        console.error('FAILED...', err);
        alert("Oops! Something went wrong. Please try again.");
      }
    );
  };


  return (
    <section className="contact-us">
      <div className="container">
      <div className="contact-container">

        <div className="contact-info">
          <h1>GET IN TOUCH<br />WITH US</h1>
          <p>
            +91 99207 13935<br />
            <a href="mailto:brew@blackcoffee.media">brew@blackcoffee.media</a>
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name*"
                {...register("firstName", { required: true })}
              />
              <input
                type="text"
                placeholder="Last Name*"
                {...register("lastName", { required: true })}
              />
            </div>
            <input
              type="email"
              placeholder="Your Email*"
              {...register("email", { required: true })}
            />

            <label className="checkbox-label">Tell us what you’re interested in:</label>
            <div className="checkboxes">
              <label><input type="checkbox" value="Creative Content" {...register("interests")} /> Creative Content</label>
              <label><input type="checkbox" value="Social Media Strategy" {...register("interests")} /> Social Media Strategy</label>
              <label><input type="checkbox" value="Motion Graphics" {...register("interests")} /> Motion Graphics</label>
              <label><input type="checkbox" value="Performance Ad Creatives" {...register("interests")} /> Performance Ad Creatives</label>
              <label><input type="checkbox" value="Other Services" {...register("interests")} /> Other Services</label>
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactUs;
