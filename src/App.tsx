import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import "./App.css";
import { useState, type ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Person {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const App = () => {
  const [person, setPerson] = useState<Person>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  // console.log(person);

  //  handler function
  //

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation
    // first name
    if (person.firstName.length < 3) {
      toast.error("Enter more than 2 words in firstName field");
      return;
    }

    // last name
    if (person.lastName.length < 3) {
      toast.error("Enter more than 2 words in lastName field");
      return;
    }

    // email
    if (person.email.trim() === "") {
      toast.error("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(person.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    // phone number
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(person.phoneNumber)) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    // password
    if (person.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    // success msg
    toast.success("Form submitted successfully!");
    console.log(person);

    // clear form
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
  };

  // reset button
  const handleReset = () => {
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });

    toast.success("Form reset successfully!");
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl my-4 border border-blue-500">
          {/* heading */}

          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>

            <p className="mt-2 text-sm text-gray-500">
              Fill in your details to continue
            </p>
          </div>

          {/* form */}

          <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* first name */}

            <TextField isRequired name="firstName" type="text">
              <Label>First Name</Label>
              <Input
                placeholder="Enter your first name"
                value={person.firstName}
                onChange={handleChange}
              />
              <FieldError />
            </TextField>

            {/* last name */}

            <TextField isRequired name="lastName" type="text">
              <Label>Last Name</Label>
              <Input
                placeholder="Enter your last name"
                value={person.lastName}
                onChange={handleChange}
              />
              <FieldError />
            </TextField>

            {/* email */}

            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input
                placeholder="parvez@example.com"
                value={person.email}
                onChange={handleChange}
              />
              <FieldError />
            </TextField>

            {/* phone number */}

            <TextField isRequired name="phoneNumber" type="tel">
              <Label>Phone Number</Label>
              <Input
                placeholder="+91 6296536872"
                value={person.phoneNumber}
                onChange={handleChange}
              />
              <FieldError />
            </TextField>

            {/* password */}

            <TextField isRequired minLength={8} name="password" type="password">
              <Label>Password</Label>

              <Input
                placeholder="Enter your password"
                value={person.password}
                onChange={handleChange}
              />

              <Description>Password must be at least 8 characters.</Description>

              <FieldError />
            </TextField>

            {/* buttons */}

            <div className="mt-2 flex gap-3">
              <Button className="w-full" type="submit" variant="primary">
                Submit
              </Button>

              <Button
                className="w-full"
                type="button"
                variant="danger-soft"
                onPress={handleReset}
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default App;
