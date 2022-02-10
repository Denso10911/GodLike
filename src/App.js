import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faGamepad,
  faFire,
  faMedal,
  faHeart,
  faCamera,
  faCog,
  faTimes,
  faTh,
  faGripLines,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Header from "./Compotents/Header/Header";
import Border from "./Compotents/PageBorder/Border";
import Pages from "./Compotents/Pages/Pages";
import { initiallizingAppThunk } from "./Redux/AppReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import Fetching from "./assets/Fetching/Fetching";

class App extends React.Component {
  componentDidMount() {
    this.props.initiallizingAppThunk();
  }

  render() {
    if (!this.props.initiallizing) {
      return <Fetching />;
    }
    return (
      <div className='body'>
        <Header />
        <Border />
        <Pages />
      </div>
    );
  }
}

library.add(
  fab,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faGamepad,
  faFire,
  faMedal,
  faHeart,
  faCamera,
  faCog,
  faTimes,
  faTh,
  faGripLines
);

let mapStateToProps = (state) => ({
  initiallizing: state.app.initiallizing,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initiallizingAppThunk })
)(App);
