import * as React from 'react';
import { SelectInput, useField } from 'payload/components/forms';

export const CustomSelectComponent: React.FC<{ path: string }> = ({ path }) => {
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



  return (
    <div>
      <label className='field-label'>
        Custom Select - Countries
      </label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  )
};