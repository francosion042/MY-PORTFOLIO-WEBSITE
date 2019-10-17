import React, { Component } from "react";

export class hireMe extends Component {
  render() {
    return (
      <div>
        <main className="page hire-me-page">
          <section className="portfolio-block hire-me">
            <div className="container">
              <div className="heading">
                <h2>Hire Me</h2>
              </div>
              <form>
                <div className="form-group">
                  <label for="subject">Subject</label>
                  <select
                    className="form-control"
                    id="subject"
                    name="mail-subject"
                  >
                    <option value="" selected="">
                      Choose Subject
                    </option>
                    <option value="1">Web Design</option>
                    <option value="2">Software Development</option>
                    <option value="3">Team Work</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message-body"
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-md-6">
                      <label for="hire-date">Date</label>
                      <input
                        className="form-control"
                        id="hire-date"
                        type="date"
                      />
                    </div>
                    <div className="col-md-6 button">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Hire Me
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default hireMe;
