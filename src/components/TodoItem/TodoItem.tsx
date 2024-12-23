import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  todo: Todo;
  setModal: (value: boolean) => void;
  selectedTodo: Todo | null;
  setSelectedTodo: (value: Todo) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  setModal,
  selectedTodo,
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
        <p
          className={classNames({
            'has-text-success': todo.completed,
            'has-text-danger': !todo.completed,
          })}
        >
          {todo.title}
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
            <i
              className={classNames('far', {
                'fa-eye-slash': todo.id === selectedTodo?.id,
                'fa-eye': todo.id !== selectedTodo?.id,
              })}
            />
          </span>
        </button>
      </td>
    </tr>
  );
};
