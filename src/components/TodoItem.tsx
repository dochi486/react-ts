import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string }> = (props: any) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
