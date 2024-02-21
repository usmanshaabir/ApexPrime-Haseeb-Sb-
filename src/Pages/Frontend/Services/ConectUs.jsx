import React from 'react';


export default function ConectUs() {
  const handleStarted = () => {
    window.scroll({
      top: 0
    })
  }
  return (
    <>
      <section>
        {/* choose us */}
        <div className='over'></div>
        <div className="parallax text-white text-center d-flex flex-column justify-content-center">
          <h2 style={{ fontSize: "4rem", zIndex: "2" }}>Connect With Us! Let's</h2>
          <h2 style={{ fontSize: "4rem", zIndex: "2" }}>Design Your Dream Together</h2>
          <div className='mt-3' style={{ zIndex: "2" }}>
            <button type="button" class="btn btn-lg text-light rounded-pill" style={{ backgroundColor: "#E89F71" }} onClick={handleStarted}>Get Started</button>
          </div>
        </div>
      </section>
    </>
  )
}
