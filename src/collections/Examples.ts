import { CollectionConfig } from 'payload/types';
import { CustomSelectField } from '../customSelect/field';

const Examples: CollectionConfig = {
  slug: 'examples',
  fields: [
    CustomSelectField,
  ],
}

export default Examples;