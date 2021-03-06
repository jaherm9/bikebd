import React from 'react';
import { Container } from "react-bootstrap";
import { MdOutlineContactPhone } from "react-icons/md";
const Contact = () => {
    return (
        <div>
        <Container>
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-8 col-sm-offset-2 auto">
                <div>
                  <h2>CONTACT US</h2>
                </div>
                <div>
                  <p>Let us know what your think! In order to provide better service, please do not hesitate to give us your feedback.Thank you!</p>
                </div>
                <form method="post" data-form-title="CONTACT US">
                  <input type="hidden" data-form-email="true" />
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      required=""
                      placeholder="Name*"
                      data-form-field="Name"
                    />
                  </div>
                  <div class="form-group mt-2">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      required=""
                      placeholder="Email*"
                      data-form-field="Email"
                    />
                  </div>
                  <div class="form-group mt-2">
                    <input type="tel" class="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                  </div>
                  <div class="form-group mt-2">
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Message"
                      rows="7"
                      data-form-field="Message"
                    ></textarea>
                  </div>
                  <div class="mt-2">
                    <button type="submit" class="btn btn-lg btn-danger">
                    <MdOutlineContactPhone className="react-icon"/> CONTACT US
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>
    );
};

export default Contact;