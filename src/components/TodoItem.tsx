import React from 'react';

const TodoItem: React.FC<{ text: string }> = (props: any) => {
  return (
    <div>
      <li>{props.text}</li>
    </div>
  );
};

export default TodoItem;
