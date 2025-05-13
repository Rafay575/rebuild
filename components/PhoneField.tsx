"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneFieldProps {
  label?: string;
  name?: string;
  placeholder?: string;
  // You can add more props if needed
}

export default function PhoneField({
  label = "Phone Number*",
  name = "phone",
  placeholder = "Enter your phone number",
}: PhoneFieldProps) {
  const [phoneValue, setPhoneValue] = useState("");

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <PhoneInput
        country={"us"}
        value={phoneValue}
        onChange={(phone) => setPhoneValue(phone)}
        inputProps={{
          name: name,
          id: name,
          required: true,
        }}
        placeholder={placeholder}
        enableSearch={true} // Show a search bar in the dropdown
        containerStyle={{
          width: "100%",
        }}
        inputStyle={{
          width: "100%",
          height: "2.5rem",
          fontSize: "1rem",
          paddingLeft: "3rem", // extra left space for flags + dial code
          borderRadius: "0.375rem",
          border: "1px solid #d1d5db", // gray-300
        }}
        buttonStyle={{
          borderTopLeftRadius: "0.375rem",
          borderBottomLeftRadius: "0.375rem",
          border: "1px solid #d1d5db",
        }}
        dropdownStyle={{
          borderRadius: "0.375rem",
        }}
      />
    </div>
  );
}
