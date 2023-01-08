import React, {FC, useState} from 'react'


const _useState: FC = () => {
  const [todos, setTodos] = useState<{id: number, title: string}[]>([]);
  setTodos((prevState) => {
    return [
      ...prevState,
      { id: 1, title: 'Some text' }
    ];
  });
  return (
    <div>
      
    </div>
  )
}

export default _useState