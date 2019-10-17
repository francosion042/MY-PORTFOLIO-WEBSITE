import React, { Component } from "react";

export class home extends Component {
  render() {
    return (
      <div>
        <section
          class="d-flex flex-column justify-content-between"
          id="main"
          style={{ marginTop: "5px" }}
        >
          <div>
            <header class="text-center"></header>
          </div>
        </section>
        <div>
          <div
            class="header-blue"
            style={{
              backgroundImage: "url('./assets/img/desk.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginTop: "15px"
            }}
          >
            <div class="container hero">
              <div class="row">
                <div
                  class="col-12 col-lg-6 col-xl-5 offset-xl-1"
                  style={{ marginTop: "15px" }}
                >
                  <h1>The revolution is here.</h1>
                  <p>
                    Mauris egestas tellus non ex condimentum, ac ullamcorper
                    sapien dictum. Nam consequat neque quis sapien viverra
                    convallis. In non tempus lorem.{" "}
                  </p>
                  <a
                    className="btn btn-primary btn-lg"
                    role="button"
                    href="/hireMe"
                  >
                    Hire me
                  </a>
                </div>
                <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                  <div class="iphone-mockup">
                    <img
                      class="border rounded-circle device"
                      src="assets/img/avatar.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="portfolio-block skills">
          <div class="container">
            <div class="heading">
              <h2>Special Skills</h2>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card special-skill-item border-0">
                  <div class="card-header bg-transparent border-0">
                    <i class="icon ion-ios-star-outline"></i>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Mobile App Development</h3>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card special-skill-item border-0">
                  <div class="card-header bg-transparent border-0">
                    <i class="icon ion-ios-lightbulb-outline"></i>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">FullStack Web development</h3>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card special-skill-item border-0">
                  <div class="card-header bg-transparent border-0">
                    <i class="icon ion-ios-gear-outline"></i>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Content Editing</h3>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="features-boxed">
          <div class="container">
            <div class="intro">
              <h2 class="text-center">Features </h2>
              <p class="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.
              </p>
            </div>
            <div class="row justify-content-center features">
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-map-marker icon"></i>
                  <h3 class="name">Works everywhere</h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a class="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-clock-o icon"></i>
                  <h3 class="name">Always available</h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a class="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-list-alt icon"></i>
                  <h3 class="name">Customizable </h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a class="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-leaf icon"></i>
                  <h3 class="name">Organic </h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a class="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-plane icon"></i>
                  <h3 class="name">Fast </h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a class="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-phone icon"></i>
                  <h3 class="name">Mobile-first</h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a class="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default home;
