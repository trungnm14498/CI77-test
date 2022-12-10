import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoRemainingSelector } from '../../redux/selectors';

import todoListSlice from './todoSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');

  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false
      })
    );
    setTodoName('');
  }

  const handleDeleteAll = () => {
    dispatch(todoListSlice.actions.deleteAll());
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              completed={todo.completed} />))
        }
        <Button type='danger' style={{ marginTop: '20px', marginLeft: '40%' }} onClick={handleDeleteAll}>
          Delete All
        </Button>
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} placeholder='add detail' />
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
