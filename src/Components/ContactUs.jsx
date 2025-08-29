import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import "../Styles/ContactUs.css"
import emailjs from 'emailjs-com';


const ContactUs = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleGifComplete = () => {
    setShowSuccess(false);
    setShowError(false);

    setTimeout(() => {
      reset();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1000);
  };


// ffsc zepc jvfy mklj --> app password

  const onSubmit = (data) => {
    setIsSubmitting(true);
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      interests: data.interests || []
    };

    emailjs.send(
      'service_i0fdhgp',
      'template_c3pnmt9',
      templateParams,
      'gz7tVuaStfxhLphul'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSuccess(true);
      },
      (err) => {
        console.error('FAILED...', err);
        setShowError(true);
      }
    ).finally(() => {
      setIsSubmitting(false);
      setTimeout(handleGifComplete, 3000);
    });
  };



  return (
    <section className="contact-us" id='contact'>
      <div className="container">
      <div className="contact-container">

        <div className="contact-info">
          <h1>GET IN TOUCH<br />WITH US</h1>
          <p>
            +91 99207 13935<br />
            <a href="mailto:brew@blackcoffee.media">brew@blackcoffee.media</a>
          </p>
          <div className="social-icons">
            {/* <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a> */}
          </div>
        </div>

        <div className="contact-form">
          {showSuccess ? (
            <div className="feedback-container">
              <img src="/Thank you-white.gif" alt="Success" onLoad={() => setTimeout(handleGifComplete, 3000)} />
            </div>
          ) : showError ? (
            <div className="feedback-container">
              <img src="/error.gif" alt="Error" onAnimationEnd={handleGifComplete} />
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="First Name*"
                    {...register("firstName", { required: "First name is required" })}
                  />
                  {errors.firstName && <span className="error">{errors.firstName.message}</span>}
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Last Name*"
                    {...register("lastName", { required: "Last name is required" })}
                  />
                  {errors.lastName && <span className="error">{errors.lastName.message}</span>}
                </div>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your Email*"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>

              <label className="checkbox-label">Tell us what you’re interested in:</label>
              <div className="checkboxes">
                <label><input type="checkbox" value="Creative Content" {...register("interests")} /> Creative Content</label>
                <label><input type="checkbox" value="Social Media Strategy" {...register("interests")} /> Social Media Strategy</label>
                <label><input type="checkbox" value="Motion Graphics" {...register("interests")} /> Motion Graphics</label>
                <label><input type="checkbox" value="Performance Ad Creatives" {...register("interests")} /> Performance Ad Creatives</label>
                <label><input type="checkbox" value="Other Services" {...register("interests")} /> Other Services</label>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Brewing...." : "Send"}
              </button>
            </form>
          )}
        </div>

      </div>
      </div>
    </section>
  );
};

export default ContactUs;
