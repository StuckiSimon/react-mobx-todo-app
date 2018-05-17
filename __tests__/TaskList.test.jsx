import React from 'react';
import { render, Simulate } from 'react-testing-library';
import TaskList from '../src/components/TaskList';
import Todo from '../src/service/Todo';

const todoTitle = 'Title';
const todo = new Todo(1, todoTitle, 2, false);
const todos = [ todo ]

describe('the TaskList component', () => {
  it('should render a todo', () => {
    const { getByText, container } = render(<TaskList todos={todos}/>);
    expect(container.children).toHaveLength(1);
    expect(getByText(todoTitle)).toBeTruthy();
  })
})