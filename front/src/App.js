import "./App.css";

//IMG
import cover from "./assets/img/cover.png";
import logo from "./assets/img/logo.png";
import lb1 from "./assets/img/lookbook1.png";
import lb2 from "./assets/img/lookbook2.png";
import lb3 from "./assets/img/lookbook3.png";
import lb4 from "./assets/img/lookbook4.png";
import lb5 from "./assets/img/lookbook5.png";
import pattern from "./assets/img/pattern.png";
import simplecover from "./assets/img/simplecover.png";
import golfcat from "./assets/img/golfcat.png";

//ICONS
import notification from "./assets/icons/notification.png";

function App() {
  return (
    <div className="app-container">
      <nav>
        <div>
          <a>GOLF</a>
        </div>
        <ul>
          <li>
            <a>AW23</a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>
      </nav>
      <header>
        <div>
          <img src={logo} alt="GOLF logo" />
        </div>
        <button onClick={() => document.getElementById("1").scrollIntoView()}>
          ↓
        </button>
      </header>
      <section id="1" className="aw23">
        <div>
          <div></div>
          <div>
            <img src={lb3} alt="lookbook 3" />
          </div>
          <div>
            <img src={lb4} alt="lookbook 4" />
          </div>
          <div>
            <img src={lb5} alt="lookbook 5" />
          </div>
          <div>
            <h1>FA</h1>
            <h1>LL</h1>
            <h1>20</h1>
            <h1>23</h1>
          </div>
        </div>
        <button onClick={() => document.getElementById("2").scrollIntoView()}>
          ↓
        </button>
      </section>
      <section id="2" className="content">
        <div className="content-image-container">
          <div>
            <img src={lb1} />
          </div>
          <div>
            <img src={lb2} />
          </div>
        </div>
        <div className="content-text-wrapper">
          <h1>GO</h1>
          <h1>LF</h1>
          <h1>WA</h1>
          <h1>NG</h1>
        </div>
        <button onClick={() => document.getElementById("3").scrollIntoView()}>
          ↓
        </button>
      </section>
      <section id="3" className="forms">
        <div></div>
        <div></div>
        <form>
          <h3>GET OUR LATEST NEWS</h3>
          <label>YOUR NAME</label>
          <input type="text" />
          <label>YOUR EMAIL</label>
          <input type="email" />
          <label>YOUR COUNTRY</label>
          <select>
            {/* TRAER DATOS DE API DE PAISES */}
            <option>Argentina</option>
          </select>
          <button>SUBSCRIBE</button>
        </form>
        <h4>Golf Wang ™</h4>
      </section>
    </div>
  );
}

export default App;
