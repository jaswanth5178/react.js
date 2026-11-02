
import { useState, useEffect } from 'react';

const useDebounce = (search) => {
  const [debouncevalue, setDebounceValue] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return { debouncevalue };
};

export default useDebounce;
