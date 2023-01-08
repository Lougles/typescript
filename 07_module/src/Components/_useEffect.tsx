import React, {FC, useEffect, useState} from 'react'

const _useEffect: FC = () => {

  const [state, setState] = useState<{name: string}[]>([]);

  const getPerson = async () => {
  const result = await fetch('api/getPerson');
  const person = await result.json();
  setState(person);
  }

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default _useEffect