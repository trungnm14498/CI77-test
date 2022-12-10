import { Row, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import todoListSlice from '../TodoList/todoSlice';
import { AiFillDelete } from 'react-icons/ai'

export default function Todo({ name, completed, id }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);


  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };

  const handleDelete = () => {
    dispatch(todoListSlice.actions.deleteTodo(id));
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <button onClick={handleDelete}>
        <AiFillDelete style={{ color: 'gray', fontSize: '16px' }} />
      </button>
    </Row>
  );
}
