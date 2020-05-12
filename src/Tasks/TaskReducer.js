import { TaskMethods } from "./TaskMethods";

const initialState = {
    task: {},
    isCreated: false
}

export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TaskMethods.CREATE_TASK:
            return state
        default:
            return state
    }
}