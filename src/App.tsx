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

  console.log(person);

  //  handler function
  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      phoneNumber: e.target.value,
    });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      password: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(person);

    toast.success("Successfully toasted!");
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
                onChange={handleFirstNameChange}
              />
              <FieldError />
            </TextField>

            {/* last name */}

            <TextField isRequired name="lastName" type="text">
              <Label>Last Name</Label>
              <Input
                placeholder="Enter your last name"
                value={person.lastName}
                onChange={handleLastNameChange}
              />
              <FieldError />
            </TextField>

            {/* email */}

            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input
                placeholder="john@example.com"
                value={person.email}
                onChange={handleEmailChange}
              />
              <FieldError />
            </TextField>

            {/* phone number */}

            <TextField isRequired name="phone" type="text">
              <Label>Phone Number</Label>
              <Input
                placeholder="+91 9876543210"
                value={person.phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <FieldError />
            </TextField>

            {/* password */}

            <TextField isRequired minLength={8} name="password" type="password">
              <Label>Password</Label>

              <Input
                placeholder="Enter your password"
                value={person.password}
                onChange={handlePasswordChange}
              />

              <Description>
                Must contain at least 8 characters, 1 uppercase letter and 1
                number
              </Description>

              <FieldError />
            </TextField>

            {/* buttons */}

            <div className="mt-2 flex gap-3">
              <Button className="w-full" type="submit" variant="primary">
                Submit
              </Button>

              <Button className="w-full" type="reset" variant="danger-soft">
                Reset
              </Button>
            </div>
          </Form>
          <p>
            {person.firstName}
            {person.lastName}
            {person.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
