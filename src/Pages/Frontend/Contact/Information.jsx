import React from 'react';
import contact from "../../../Assets/Images/ourproject.jpg"

const Information = () => {
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

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your name here" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your email here" />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Your phone number" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your message here"></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">Send Message</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Information;
