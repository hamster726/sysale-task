import React, {useState} from "react";
import CardItem from "../cards/carditem";

import Card1Img1 from "../../img/cards/card1-1.jpg";
import Card1Img2 from "../../img/cards/card1-2.jpg";
import Card2Img1 from "../../img/cards/card2-1.jpg";
import Card2Img2 from "../../img/cards/card2-2.jpg";
import Card3Img1 from "../../img/cards/card3-1.jpg";
import Card3Img2 from "../../img/cards/card3-2.jpg";

function App() {

  const [compareCounter, setCompareCounter] = useState(0);

  return (
    <section className="catalog">
      <div className="container">

        {/* we can do here cardlist generator like item.map and and transfer certain data to fill the cards with data */}

        <CardItem setCompareCounter={setCompareCounter}
                  compareCounter={compareCounter}
                  mainImg={Card1Img1}
                  secondImg={Card1Img2}
                  id={1}
        />
        <CardItem setCompareCounter={setCompareCounter}
                  compareCounter={compareCounter}
                  mainImg={Card2Img1}
                  secondImg={Card2Img2}
                  id={2}
        />
        <CardItem setCompareCounter={setCompareCounter}
                  compareCounter={compareCounter}
                  mainImg={Card3Img1}
                  secondImg={Card3Img2}
                  id={3}
        />
      </div>
    </section>
  );
}

export default App;
