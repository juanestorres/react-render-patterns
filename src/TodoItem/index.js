import react from "react";
import './TodoItem.css';
import {BsCheckLg} from 'react-icons/bs';
import {AiOutlineDelete} from 'react-icons/ai';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <BsCheckLg/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        <AiOutlineDelete/>
      </span>
    </li>
  );
}

export { TodoItem };