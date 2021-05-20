import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ text: 'Pay Bills', id: uuidv4() },
		{ text: 'Do your homework', id: uuidv4() },
		{ text: 'Feed the dog', id: uuidv4() }
	]);

	const [count, setCount] = useState(0);

	const addTodo = (text) => {
		setTodos([
			...todos,
			{ text, id: uuidv4() }
		]);
	};

	useEffect(() => {
		console.log('use effect', todos);
	}, [todos]);

	useEffect(() => {
		console.log('use effect', count);
	}, [count]);

	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>{todo.text}</li>
					)
				})}
			</ul>
			<AddNewTodo addTodo={addTodo}/>
			<button onClick={() => setCount(count + 1)}>Score: {count}</button>
		</div>
	)
};

export default TodoList;
