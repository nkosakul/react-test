import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLocaleLowerCase()}`;
  const dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        name="breed"
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, dropdown, setState];
};

export default useDropdown;
