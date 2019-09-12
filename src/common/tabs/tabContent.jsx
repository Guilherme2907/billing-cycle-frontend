import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TabsActions from "./tabsAction";
import If from "./operator/if";

class TabContent extends Component {
  render() {
    const { selected, id } = this.props;
    const selectedId = selected === id ? "active" : "";
    return (
      <If test={selectedId === "active"}>
        <div id={id}>
          <div className={`tab-pane ${selectedId}`}>{this.props.children}</div>
        </div>
      </If>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.tab.selected
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TabsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabContent);
