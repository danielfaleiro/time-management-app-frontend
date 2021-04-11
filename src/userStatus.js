const userStatus = {
  USER: 0,
  MANAGER: 1,
  ADMIN: 2,
};

const getStatusText = (status) => {
  if (status === userStatus.USER) {
    return 'User';
  }
  if (status === userStatus.MANAGER) {
    return 'Manager';
  }
  return 'Admin';
};

export {
  userStatus,
  getStatusText,
};
