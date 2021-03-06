import React from 'react';
import './vision.css';
import vission from '../../../assets/vision.jpeg';
import { Fade } from 'react-reveal';

const vision = () => {
  // document.querySelector("#adforcaModal_toggle").click();
  return (
    <div className="vision">
      <div className="container-fluid ctn-3">
        <div className="vission-heading">
          Our Vision
          <div className="head-line">
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col3">
            <Fade left>
              <p className="run">
                <img
                  alt="Running Man"
                  className="running-man"
                  src={vission}
                ></img>
              </p>
            </Fade>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
            <Fade right>
              <p className="text-6">
                The Entrepreneurship cell, NIT Raipur is a non-profit
                organization that manifests the essence of entrepreneurship in
                the passionate youngsters who have the zeal to pursue
                entrepreneurship and advocate this vehement enthusiasm in the
                generations to com e. Keeping this ideology in mind we not only
                provide the foundation to the entrepreneurial capabilities of
                the promising young minds but also help in nurturing their
                skills by providing resources such as new ideas.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vision;
