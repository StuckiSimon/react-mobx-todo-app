import React from 'react';
import { render, Simulate } from 'react-testing-library';
import Task from '../src/components/Task';
import Todo from '../src/service/Todo';

const todoTitle = 'Title';
const todo = new Todo(1, todoTitle, 2, false);

describe('the task component', () => {
  it('should render a todo', () => {
    const { getByText } = render(<Task todo={todo}/>);
    expect(getByText(todoTitle)).toBeTruthy();
  })
  it('should fire the toggle action', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<Task todo={todo} toggle={spy}/>);
    const $todo = getByTestId('switch');
    Simulate.click($todo);
    expect(spy).toHaveBeenCalled();
  })
})