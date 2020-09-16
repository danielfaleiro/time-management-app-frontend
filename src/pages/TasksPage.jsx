import React from 'react';
import TaskForm from '../components/TaskForm';
import AppPage from '../components/Page';
import TaskList from '../components/TaskList';

const TaskPage = () => (
  <AppPage>
    <TaskForm />
    <TaskList />
  </AppPage>
);

export default TaskPage;
