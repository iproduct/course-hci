import React from 'react';

const TodoItem = ({todo}) => (
    <li>{todo.title} - {todo.status}</li>
);

export default TodoItem;