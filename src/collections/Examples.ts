import { CollectionConfig } from "payload/types";
import { CustomSelectField } from "../fields/customSelect/field";
import { StandardSelectField } from "../fields/standardSelect/field";
import { CustomHasManySelectField } from "../fields/customSelectHasMany/field";

const Examples: CollectionConfig = {
  slug: "examples",
  fields: [StandardSelectField, CustomSelectField, CustomHasManySelectField],
};

export default Examples;
