import { useState, useEffect } from "react";

interface IFormInput {
  company: string,
  companyKey: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
}

const useForm = ({ initState, callback, validator }:any )=> {
  const [state, setState] = useState<IFormInput>(initState);
  const [errors, setErrors] = useState<any>({});
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter(error => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors()) callback();
  }, [errors]);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value
    }));
  };

  const handleBlur = (e:any) => {
    const { name: fieldName } = e.target;
    const faildFiels = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0]
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const { name: fieldName } = e.target;
    const faildFiels = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0]
    }));
    setIsSubmited(true);
  };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    state,
    errors,
  };
};

export default useForm;
