import React from "react";
import './Accordian.css'

function Accrodian() {
  return (
    <div>
      <section className="accrodian-section">
      <h1 className='FAQ-introtext'>FAQ</h1>
        <div class="accordian-container">
          <div class="accordion">
            <div class="accordion-item" id="question1">
              <a class="accordion-link" href="#question1">
                <div class="flex">
                  <h3>WHAT IS ALGORYTHM ?</h3>
                </div>
                <i class="icon ion-md-arrow-forward"></i>
                <i class="icon ion-md-arrow-down"></i>
              </a>
              <div class="answer">
                <p>
                  {" "}
                  We believe in the greater good, we strive to do something for
                  people, we aim to make their lives easier and more enjoyable,
                  we love businesses that keep this
                </p>
              </div>
              <hr />
            </div>
            <div class="accordion-item" id="question2">
              <a class="accordion-link" href="#question2">
                <div class="flex">
                  <h3>UX/UI DESIGN</h3>
                </div>
                <i class="icon ion-md-arrow-forward"></i>
                <i class="icon ion-md-arrow-down"></i>
              </a>
              <div class="answer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
              <hr />
            </div>
            <div class="accordion-item" id="question3">
              <a class="accordion-link" href="#question3">
                <div class="flex">
                  <h3>FRONTEND DEVELOPMENT</h3>
                </div>
                <i class="icon ion-md-arrow-forward"></i>
                <i class="icon ion-md-arrow-down"></i>
              </a>
              <div class="answer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
              <hr />
            </div>
            <div class="accordion-item" id="question4">
              <a class="accordion-link" href="#question4">
                <div>
                  <h3>BACKEND DEVELOPMENT</h3>
                </div>
                <i class="icon ion-md-arrow-forward"></i>
                <i class="icon ion-md-arrow-down"></i>
              </a>
              <div class="answer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accrodian;
