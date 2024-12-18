import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  setModal: (value: boolean) => void;
  setSelectedTodo: (value: Todo) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  setModal,
  setSelectedTodo,
}) => {
  const modalClick = () => {
    setModal(true);
    setSelectedTodo(todo);
  };

  return (
    <tr data-cy="todo" className="">
      <td className="is-vcentered">{todo.id}</td>
      <td className="is-vcentered">
        {todo.completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>
      <td className="is-vcentered is-expanded">
        <p className={todo.completed ? 'has-text-success' : 'has-text-danger'}>
          {todo.title}{' '}
        </p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={modalClick}
        >
          <span className="icon">
            <i className="far fa-eye" />
          </span>
        </button>
      </td>
    </tr>
  );
};