import * as Yup from "yup";

import { PolicyFormValues } from "./types";

export const tempInitialValues: PolicyFormValues = {
  carNickname: "Bumblebee",
  homeAddress: "Example Road 7, Stockholm",
  phoneNumber: "44 532 879",
};

export const validationSchema = Yup.object({
  carNickname: Yup.string().required("Car nickname is required"),
  homeAddress: Yup.string().required("Home address is required"),
  phoneNumber: Yup.number()
    .typeError("Phone number must be a number")
    .required("Phone number is required"),
});
