import React, { useRef, useState } from 'react';
import contact from "../../../Assets/Images/ourproject.jpg";
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const initState = { name: "", email: "", phone: "", message: "" }
const Information = () => {


  const [state, setState] = useState(initState)
  const [isApploading, setIsApploading] = useState(true)
  const form = useRef();


  // const handleSubmit = () => {
  //   console.log("state", state);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsApploading(false)
    emailjs
      .sendForm('service_1x5zs0v', 'template_ko51b1u', form.current, {
        publicKey: '3QdE4wfG00LQ1rM2j',
      })
      .then(
        () => {
          setState(initState)
          console.log('SUCCESS!');
          toast("Data sent Successfully!");
          setIsApploading(true)

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast("Please Try Again")
        },
      );
  };


  return (
    <section className='InformationCard py-5 ' style={{ backgroundColor: "#ede4d9" }}>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Talk to Us!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src={contact} className='img-fluid rounded-4 ' alt="" />
          </div>
          <div className="col-md-6">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" name="name" value={state.name} onChange={(event) => setState({ ...state, name: event.target.value })} className="form-control" placeholder="Your name here" />
              </div>
              <div className="mb-3">
                <input type="email" name="email" value={state.email} onChange={(event) => setState({ ...state, email: event.target.value })} className="form-control" placeholder="Your email here" />
              </div>
              <div className="mb-3">
                <input type="tel" name="phone" value={state.phone} onChange={(event) => setState({ ...state, phone: event.target.value })} className="form-control" placeholder="Your phone number" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" value={state.message} name="message" onChange={(event) => setState({ ...state, message: event.target.value })} rows="5" placeholder="Your message here"></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" value="send" className="btn btn-dark">{isApploading ? "Send Message" : <span className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span></span>}</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Information;
