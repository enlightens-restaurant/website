import { useState } from "react";

export const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "This field is required";
        }
        break;
      case "email":
        if (!value) {
          error = "This field is required";
        } else if (!isValidEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!value) {
          error = "This field is required";
        } else if (!isValidPhone(value)) {
          error = "Please enter a valid phone number";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const validateForm = (data) => {
    const newErrors = {};
    const requiredFields = ["name", "phone", "email"];

    requiredFields.forEach((field) => {
      const error = validateField(field, data[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (fieldName) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s-()]/g, "");
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  };

  return {
    errors,
    validateField,
    validateForm,
    clearError,
  };
};
