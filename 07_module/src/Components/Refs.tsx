import React, {useRef, FC} from 'react'


type Props = {}

const Refs: FC = (props)=> {
  const textInputRef = useRef<HTMLInputElement>(null);
  // const sisenseRef = useRef(null);
  const enteredText = textInputRef.current!.value;

  return (
    <div>
    </div>
  )
}

export default Refs