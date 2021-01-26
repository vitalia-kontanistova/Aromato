import React from "react";
import { connect } from "react-redux";
import { setOpenBurgerMenu } from "../../../redux/burger_reducer";
import BurgerMenu from "./BurgerMenu";

class BurgerContainer extends React.Component {
  toggleBurgerMenu = () => {
    this.props.setOpenBurgerMenu(!this.props.isOpen);
  };

  render() {
    return (
      <BurgerMenu {...this.props} toggleBurgerMenu={this.toggleBurgerMenu} />
    );
  }
}

let mapStateToProps = (state) => ({
  isOpen: state.burgerReducer.isBurgerMenuOpen,
});

export default connect(mapStateToProps, { setOpenBurgerMenu })(BurgerContainer);
