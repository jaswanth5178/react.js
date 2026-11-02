import React, { useRef } from 'react';
import SubmitButton from './9.Hooks/useFormStatus/SubmitButton';

const App = () => {
  const inputRef = useRef();

  async function handleSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(formData.get('username'));
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input
          ref={inputRef}
          name="username"
          placeholder="Enter Your Name"
        />

        <SubmitButton />
      </form>
    </div>
  );
};

export default App;