import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TabsActions from "./tabsAction";
import If from "../operator/if";

class TabHeader extends Component {
  render() {
    const { target, icon, label, selected, selectTab,visible } = this.props;
    const selectedItem = selected === target ? "active" : "";
    const visibleItem = visible[target];

    return (
      <If test={visibleItem}>
        <li className={selectedItem}>
          <a
            href="javascript:;"
            data-toggle="tab"
            onClick={() => selectTab(target)}
            data-target={target}
          >
            <i className={`fa fa-${icon}`}></i> {label}
          </a>
        </li>
      </If>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.tab.selected,
  visible: state.tab.visible
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TabsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabHeader);
