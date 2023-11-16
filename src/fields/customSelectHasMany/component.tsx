import * as React from 'react';
import { SelectInput, useField } from 'payload/components/forms';

export const CustomHasManySelectComponent: React.FC<{ path: string }> = ({ path }) => {
  const { value, setValue } = useField<string>({ path });
  const [options, setOptions] = React.useState([]);

  // Fetch options on component mount
  React.useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const countryOptions = data.map((country) => {
          return {
            label: `${country.name.common + ' ' + country.flag}`,
            value: country.name.common,
          };
        });

        setOptions(countryOptions.sort(
          (a, b) => a.label.localeCompare(b.label)
        ));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchOptions();
  }, []);

  React.useEffect(() => {
    if (value && !Array.isArray(value)) {
      // convert saved stringified array back to an array
      const newValue = JSON.parse(value);
      setValue(newValue)
    }
  }, [value]);

  return (
    <div>
      <label className='field-label'>
        Custom Select - Has Many
      </label>
      <SelectInput
        path={path}
        name={path}
        hasMany={true}
        options={options}
        value={value}
        onChange={
          (selectedOption) => {
            if (!Array.isArray(selectedOption)) return
            const newValue = selectedOption.map((option) => option.value)
            setValue(newValue)
          }
        }
      />
    </div>
  )
};

function useCallback(arg0: (selectedOption: any) => void, arg1: ((val: unknown, modifyForm?: boolean) => void)[]) {
  throw new Error('Function not implemented.');
}
