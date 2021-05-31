import "../styles.css";
import Button from "@material-ui/core/Button";

export default function App() {
  return (
    <div className="App">
      <body>
        <div class="navbar sticky">
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <div class="dropdown">
            <button class="dropbtn">
              Resources<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Chapter 1</a>
              <a href="#">Chapter 2</a>
              <a href="#">Chapter 3</a>
            </div>
          </div>
          <a href="#home">Home</a>
        </div>
        <div class="container">
          <img
            src="https://3.bp.blogspot.com/-GQdXZYTeY80/WAsinlu3UaI/AAAAAAAAHpE/4VNvl3IVdW8IPCnHfvpHdbRYQ6dKlY-7wCLcB/s1600/Hacker%2BBackground%2B1.jpg"
            id="main-image"
          />
          <div class="box1"> HackerTeen </div>
          <div class="centered">
            Making the learning of cybersecurity knowledge and hacking skills
            fun and simple
          </div>
        </div>
        <div class="container">
          <img
            src="https://www.ets.org/s/k12/img/assessments-home.jpg"
            id="main-image"
          />
          <div class="box1 white"> About </div>
          <div class="centered overlay">
            <h3>
              As a one-stop platform to empower teenagers with cybersecurity
              skills and knowledge to make better career decisions, we aim to
              ignite the passions of the next generation
            </h3>
          </div>
        </div>

        <div class="container" id="first-sec">
          <div class="column-left">
            <div className="box">
              <h2 class="center black">My Courses</h2>
              <p class="center black">
                {" "}
                Get back into where you last stopped
                <br />
                <br />
                Current course: <strong> Intro to Cryptography</strong>
                <br />
                <br />
                Completion Progress: <strong>63%</strong>{" "}
              </p>
              <div class="container">
                <Button variant="contained" color="primary">
                  Continue
                </Button>
              </div>
            </div>
          </div>
          <div class="column-right">
            <img
              src="https://www.cybertalk.org/wp-content/uploads/2019/11/iStock-963458556-1.jpg"
              class="small-image"
            />
          </div>
        </div>

        <div class="container" id="second-sec">
          <div class="flip-column-left">
            <img
              src="https://i.pinimg.com/736x/46/25/fb/4625fbbf6cfd3d6f21de377446754a4b.jpg"
              class="small-image"
            />
          </div>

          <div class="flip-column-right">
            <div className="box">
              <h2 class="center black">Progress Update</h2>
              <p class="center black">
                Welcome back! You've been here for <strong>5</strong> concurrent
                days! Keep it up!
                <br />
                <ul>
                  {" "}
                  Progress:
                  <li> Encryption and Decryption </li>
                  <li> Intro to Cyphers </li>
                  <li>
                    {" "}
                    <mark>Authentication </mark>{" "}
                  </li>
                  <li> Secret Key and Public Key </li>
                  <li> Algorithms: RSA, Hash Functions </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <p> © 2021 HackerTeen </p>
        </div>
      </body>
    </div>
  );
}
