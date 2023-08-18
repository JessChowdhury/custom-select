import { CollectionConfig } from 'payload/types';
import { CustomSelectField } from '../fields/customSelect/field';
import { StandardSelectField } from '../fields/standardSelect/field';

const Examples: CollectionConfig = {
  slug: 'examples',
  fields: [
    StandardSelectField,
    CustomSelectField,
  ],
}

export default Examples;