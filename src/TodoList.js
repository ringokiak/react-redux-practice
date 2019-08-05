import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "./store/actionCreators";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import axios from "axios";

class TodoList extends Component {
  render() {
    return (
      <div style={{ padding: 30 }}>
        <label htmlFor="inp">请输入：</label>
        <Input
          id="inp"
          style={{ width: 300, marginRight: 10 }}
          value={this.props.inputValue}
          onChange={this.props.changeInputValue}
        />
        <Button type="primary" onClick={this.props.addTodoItem}>
          提交
        </Button>
        <div>
          <List
            style={{ width: 300, marginLeft: 56, marginTop: 10 }}
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <span
                    onClick={() => {
                      this.props.deleteTodoItem(index);
                    }}
                  >
                    删除
                  </span>
                ]}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("api/todolist")
      .then(res => {
        this.props.getInitList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = actionCreators.changeInputValue(e.target.value);
      dispatch(action);
    },
    getInitList(val) {
      const action = actionCreators.getInitList(val);
      dispatch(action);
    },
    addTodoItem() {
      const action = actionCreators.addTodoItem();
      dispatch(action);
    },
    deleteTodoItem(index) {
      const action = actionCreators.deleteTodoItem(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
