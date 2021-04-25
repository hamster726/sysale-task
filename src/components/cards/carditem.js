import React, {useState} from "react";

import CardImg1 from "../../img/cards/card1-1.jpg";
import CardImg2 from "../../img/cards/card1-2.jpg";
import CompareIco from "../../img/icons/compare-icon.svg";
import SelectedIco from "../../img/icons/selected-icon.svg";

const CardItem = () => {

  const [count, setCount] = useState(1);
  const [capacity, setCapacity] = useState(1);
  const [colorListIsOpened, toggleColorList] = useState({open: ""});
  const [chosenColor, changeChosenColor] = useState("Цвет");

  const setCountOfItem = (value) => {
    if (value === "-" && count !== 1) {
      setCount(count - 1);
    }
    if (value === "+") {
      setCount(count + 1);
    }
  }

  const setCapacityOfItem = (elem) => {
    setCapacity(elem.target.value);
  }

  const chooseColor = (e) => {
    changeChosenColor(e.target.innerText);
    toggleColorList({open: ""});
  }


  return (
    <div className="catalog-item">
      <div className="catalog-item__wrapper">
        <div className="catalog-item__labels">
          <div className="catalog-item__new-label">new</div>
          <button className="catalog-item__compare-button"><img src={CompareIco} alt="compare icon"/></button>
        </div>
        <div className="catalog-item__img">
          <img src={CardImg1} alt="shampoo"/>
        </div>
        <div className="catalog-item__text-wrapper">
          <h4 className="catalog-item__title">Шампунь</h4>
          <div className="catalog-item__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </div>
        </div>
        <div className="catalog-item__color-price-wrapper">
          <div className="catalog-item__color-select">
            <details onMouseEnter={() => toggleColorList({open: "open"})}
                     onMouseLeave={() => toggleColorList({open: ""})}
                     {...colorListIsOpened}>
              <summary>{chosenColor}</summary>
              <ul id="list" onClick={chooseColor}>
                <li>
                  <button>Желтый</button>
                </li>
                <li>
                  <button>Красный</button>
                </li>
                <li>
                  <button>Зеленый</button>
                </li>
                <li>
                  <button>Чёрный</button>
                </li>
                <li>
                  <button>Оранжевый</button>
                </li>
                <li>
                  <button>Розовый</button>
                </li>
                <li>
                  <button>Белый</button>
                </li>
              </ul>
            </details>
          </div>
          <div className="catalog-item__price">200 грн</div>
        </div>
        <div className="catalog-item__radio-wrapper" onChange={(e) => {
          setCapacityOfItem(e)
        }}>
          <div className="form_radio">
            <input id="radio-1" className="custom-radio" type="radio" name="radio" value="1" defaultChecked/>
            <label htmlFor="radio-1">100 мл</label>
          </div>
          <div className="form_radio">
            <input id="radio-2" className="custom-radio" type="radio" name="radio" value="2"/>
            <label htmlFor="radio-2">200 мл</label>
          </div>
          <div className="form_radio">
            <input id="radio-3" className="custom-radio" type="radio" name="radio" value="3"/>
            <label htmlFor="radio-3">300 мл</label>
          </div>
        </div>
        <div className="catalog-item__counter-buy-button-wrapper">
          <div className="catalog-item__counter">
            <button className="minus" onClick={() => setCountOfItem("-")}>-</button>
            <div className="count">{count}</div>
            <button className="plus" onClick={() => setCountOfItem("+")}>+</button>
          </div>
          <button className="catalog-item__buy-button">Купить</button>
        </div>

      </div>
    </div>
  )
}

export default CardItem;