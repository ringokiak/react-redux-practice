import actionTypes from "./actionTypes";

export default {
  changeInputValue: value => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
  }),
  getInitList: value => ({
    type: actionTypes.GET_INIT_LIST,
    value
  }),
  addTodoItem: () => ({
    type: actionTypes.ADD_TODO_ITEM
  }),
  deleteTodoItem: value => ({
    type: actionTypes.DELETE_TODO_ITEM,
    value
  })
};
