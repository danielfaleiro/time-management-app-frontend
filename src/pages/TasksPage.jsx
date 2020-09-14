import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import Page from '../styled-components/Page';

const TaskPage = () => (
  <Page>
    <AddTask />
    <TaskList />
  </Page>
);

export default TaskPage;
