export const CreateTask = (userData) => {
    return {
      type: "CREATE_TASK",
      payload: userData
    };
  };