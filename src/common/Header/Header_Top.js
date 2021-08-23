import React from 'react';

const Header_Top = () => {
    return (
        <>
            <div className="header_top_main_wrap">
              <div className="container-xxl container-md container-fluid">
                <div className="header_top_inner_wrap">
                  <div className="header_top">
                    <div className="row">
                      <div className="col-lg-6 col-md-8 my-auto">
                        <div className="header_top_left">
                          <p>
                            <span>
                              <i className="fal fa-phone-alt"></i>
                            </span>
                            +880123456789
                          </p>
                          <p>
                            <span>
                              <i className="fal fa-envelope"></i>
                            </span>
                            info@yourdomain.com
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-4 my-auto">
                        <div className="header_top_right">
                          <p>
                            <span>
                              <i className="fal fa-mobile"></i>
                            </span>
                            Save big on our app!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
};

export default Header_Top;