import { Field } from "payload/types";
import { CustomHasManySelectComponent } from "./component";

export const CustomHasManySelectField: Field = {
  name: "customHasManySelectField",
  type: "text",
  admin: {
    components: {
      Field: CustomHasManySelectComponent,
    },
  },
  hooks: {
    beforeValidate: [
      async ({ value }) => {
        // convert the array to string since this is a text field
        const stringifiedValue = JSON.stringify(value);
        return stringifiedValue;
      },
    ],
  },
};
