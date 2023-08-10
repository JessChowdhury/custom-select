import * as React from 'react';
import { Select, useField } from 'payload/components/forms';

const RenderIcon = ({ path }) => {
  const { value } = useField({ path });

  return (
    <div>
      {value === 'hello' && <span>👋</span>}
      {value === 'world' && <span>🌎</span>}
    </div>
  )
}

export const CustomSelectComponent: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div>
      <label className='field-label'>
        Custom Select
      </label>
      <Select
        path={path}
        name={path}
        options={[
          { label: 'Hello', value: 'hello' },
          { label: 'World', value: 'world' },
        ]}
      />
      <RenderIcon path={path} />
    </div>
  )
};