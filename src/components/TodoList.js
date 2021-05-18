import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ text: 'Pay Bills', id: uuidv4() },
		{ text: 'Do your homework', id: uuidv4() },
		{ text: 'Feed the dog', id: uuidv4() }
	]);

	const addTodo = () => {
		setTodos([
			...todos,
			{ text: 'Learn hooks', id: uuidv4() }
		]);
	};

	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>{todo.text}</li>
					)
				})}
			</ul>
			<button onClick={addTodo}>Add a todo</button>
		</div>
	)
};

export default TodoList;
