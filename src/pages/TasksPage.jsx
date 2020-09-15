import React from 'react';
import AddTask from '../components/AddTask';
import AppPage from '../components/Page';
import TaskList from '../components/TaskList';

const TaskPage = () => (
  <AppPage>
    <AddTask />
    <TaskList />
  </AppPage>
);

export default TaskPage;
