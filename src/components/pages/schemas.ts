import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().min(4, "Name is too short").max(12, "Name is too long"),
  secretCode: yup
    .number()
    .moreThan(99, "Secret code must be 3 digits")
    .lessThan(1000, "Secret code must be 3 digits")
    .typeError("Must be a number"),
});
