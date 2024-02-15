import React from 'react';


const ProcessSection = () => {
  return (
    <>
      <div className="container my-5">
        <h4 className='text-center' style={{ color: "#9b6f4c", marginTop: "130px" }}>Our Process</h4>
        <h2 className="text-center mb-5 display-1 mt-5">How We Work</h2>
        <div className="row" style={{ marginTop: "100px", marginBottom: "150px" }}>
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0">
              <div className="card-body" style={{ backgroundColor: "#f8f2eb" }}>
                <h3 className="card- text-center mt-5 display-4 fw-medium"> Strategy & Planning</h3>
                <p className="card-text text-center mt-4 mb-5">In architecture, planning involves assessing needs, analyzing sites, creating designs, ensuring compliance, collaborating, and managing projects for success.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0">
              <div className="card-body" style={{ backgroundColor: "#f8f2eb" }}>
                <h3 className="card- text-center mt-5 display-4 fw-medium">Concept Design</h3>
                <p className="card-text text-center mt-4 mb-5">Concept design in architecture is the creative stage where ideas are generated to address project requirements. It involves visualizing concepts, developing themes, and incorporating innovation and client feedback.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0">
              <div className="card-body" style={{ backgroundColor: "#f8f2eb" }}>
                <h3 className="card- text-center mt-5 display-4 fw-medium">Design Realization</h3>
                <p className="card-text text-center mt-4 mb-5">Design realization in architecture is the phase where conceptual designs become tangible structures through detailed planning, technical integration, regulatory compliance, construction documentation, and client communication</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default ProcessSection;
