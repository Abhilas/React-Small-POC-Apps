export const TodoFormValidationRules = {
    task_tb: {
        isRequired: {
            value: true,
            errorMsg: 'Task cannot be empty !!!'
        },
        minTextLength: {
            value: 3,
            errorMsg: 'Task should not be less than 4 characters !!!'
        }
    }
}