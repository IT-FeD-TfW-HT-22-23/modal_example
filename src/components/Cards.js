import "../styles/cards.css";
import Mobile from "../images/mobile.png";
import Web from "../images/web.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards-list">
        <div className="card-one"></div>

        <div className="card-two"></div>

        <div className="card-three"></div>
      </div>
    </div>
  );
};

export default Cards;

/**
 *   <div className="card-img">
            <img className="img-1" src={Mobile} />
          </div>
 * 
 * 
 * 
 * 
 *  <div className="cards">
      <div className="cards-list">
        <div className="card 1">
          <div className="card-img">
            <img src={Mobile} />
          </div>
          <div className="card-title">
            <p>Card 1</p>
          </div>
        </div>

        <div className="card 2">
          <div className="card-img"></div>
          <div className="card-title">
            <p>Card 2</p>
          </div>
        </div>

        <div className="card 3">
          <div className="card-img"></div>
          <div className="card-title">
            <p>Card 3</p>
          </div>
        </div>

        <div className="card 4">
          <div className="card-img"></div>
          <div className="card-title">
            <p>Card 4</p>
          </div>
        </div>
      </div>
    </div>
 */
