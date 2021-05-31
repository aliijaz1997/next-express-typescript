import { useContext } from "react";
import { TodoItemProps} from '../types/interface';

export function TodoItem ({ item } : TodoItemProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div>{item.title}</div>
        {/* <div>{item.id}</div> */}

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={item.completed.toString()}
            id={item.id.toString()}
            onChange={() => {
              // handleUpdateDone(item.id);
            }}
            checked={item.completed}
          />
          <label className="form-check-label" htmlFor={item.id.toString()}>
            Done
          </label>
        </div>
        <DeleteButton id={item.id} />
      </div>
    </div>
  );
}

function DeleteButton({ id }: any) {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        // handleDeleteTodo(id);
      }}
    >
      Delete
    </button>
  );
}
