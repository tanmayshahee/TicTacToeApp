import React from "react";
import { connect } from "react-redux";
import "./userinfo.css";
const UserInfo = (props) => {
  return (
    <div className="user-info-parent">
      <div className="welcome-msg">
        {`Welcome `} <span className="user-name">{props.userInfo.name}</span>
      </div>
      <div className="email">{props.userInfo.email}</div>
      <div className="image">
        <img src={props.userInfo.imageUrl} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  ...props,
  userInfo: state.login.userInfo,
});

export default connect(mapStateToProps, null)(UserInfo);
