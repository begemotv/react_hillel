import React, { PureComponent } from "react";

import {users} from "../../mocks/users";
import ButtonShowMore from "../button-show-more/button-show-more";
import CardList from "../card-list/card-list";

const CARDS_SHOWN_INITIAL = 4;
const CARDS_SHOWN_INCREMENT = 4;

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: users,
      cardsShownCount: CARDS_SHOWN_INITIAL,
      isModalVisible: false,
    };

    this.handleShowMoreButton = this.handleShowMoreButton.bind(this);
    this.handleCardAdd = this.handleCardAdd.bind(this);
    this.handleCardDelete = this.handleCardDelete.bind(this);
  }

  handleShowMoreButton() {
    this.setState((prevState) => ({
      cardsShownCount: prevState.cardsShownCount + CARDS_SHOWN_INCREMENT
    }))
  }

  handleCardAdd() {

  }

  handleCardDelete() {

  }

  render() {
    console.log(this.state.cardsShownCount)
    const {cards, cardsShownCount} = this.state;
    return(
      <div className="container__main">
        <CardList users={users}/>
        {cards.length >= cardsShownCount
        ? <ButtonShowMore 
          onShowMoreClick={this.handleShowMoreButton}
        />
        : ``
        }
      </div>
    )
  }
}

export default MainScreen;