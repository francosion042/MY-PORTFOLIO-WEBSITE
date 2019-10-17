import React, { Component } from "react";

export class portfolio extends Component {
  render() {
    return (
      <div>
        <div class="projects-horizontal">
          <div class="container">
            <div class="intro">
              <h2 class="text-center">Portfolio</h2>
              <p class="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
              </p>
            </div>
            <div class="row projects">
              <div class="col-sm-6 item">
                <div class="row">
                  <div class="col-md-12 col-lg-5">
                    <a href="#">
                      <img class="img-fluid" src="assets/img/desk.jpg" />
                    </a>
                  </div>
                  <div class="col">
                    <h3 class="name">Project Name</h3>
                    <p class="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 item">
                <div class="row">
                  <div class="col-md-12 col-lg-5">
                    <a href="#">
                      <img class="img-fluid" src="assets/img/building.jpg" />
                    </a>
                  </div>
                  <div class="col">
                    <h3 class="name">Project Name</h3>
                    <p class="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 item">
                <div class="row">
                  <div class="col-md-12 col-lg-5">
                    <a href="#">
                      <img class="img-fluid" src="assets/img/loft.jpg" />
                    </a>
                  </div>
                  <div class="col">
                    <h3 class="name">Project Name</h3>
                    <p class="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 item">
                <div class="row">
                  <div class="col-md-12 col-lg-5">
                    <a href="#">
                      <img class="img-fluid" src="assets/img/minibus.jpeg" />
                    </a>
                  </div>
                  <div class="col">
                    <h3 class="name">Project Name</h3>
                    <p class="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default portfolio;
