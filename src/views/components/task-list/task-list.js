import React from "react";
import { List } from "immutable";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-as-default
import TaskItem from "../task-item/task-item";
import styled from "styled-components";

const TaskListStyled = styled.div`
  border-top: 1px dotted #666;
`;

function TaskList({ removeTask, tasks, updateTask }) {
  let taskItems = tasks.map((task, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <TaskItem key={index} task={task} removeTask={removeTask} updateTask={updateTask} />;
  });

  return <TaskListStyled>{taskItems}</TaskListStyled>;
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List).isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default TaskList;
