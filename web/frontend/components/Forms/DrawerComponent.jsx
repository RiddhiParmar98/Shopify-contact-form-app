import React from "react";

const DrawerComponent = () => {
  return (
    <>
      <div className="container-fluid fixed-top bg-dark py-3">
        <div className="row">
          <div className="col-xl-2 col-sm-3 col-0 collapse show sidebar"></div>
          <div className="col px-3">
            <a
              data-toggle="collapse"
              href="#"
              data-target=".collapse"
              role="button"
            >
              <i className="fa fa-bars fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row vh-100 flex-nowrap">
          <div className="col-xl-2 col-sm-3 col-auto collapse show sidebar bg-dark text-white px-0">
            <ul
              className="nav flex-column flex-nowrap text-truncate navbar-dark bg-dark mx-auto position-fixed pt-2 vh-100"
              id="sidebar"
            >
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fa fa-home"></i>
                  <span className="ml-1 d-none d-sm-inline">Active</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-cog"></i>
                  <span className="ml-1 d-none d-sm-inline">Link</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-star"></i>
                  <span className="ml-1 d-none d-sm-inline">Link</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-heart"></i>
                  <span className="ml-1 d-none d-sm-inline">Link</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col py-3">
            <h3>Content..</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerComponent;
