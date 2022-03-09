import { useState } from "react";

export default function useForm(initialStates) {
  const [state, setState] = useState(initialStates);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return [state, setState, handleChange];
}
