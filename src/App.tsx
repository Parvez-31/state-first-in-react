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

const App = () => {
  return (
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

        <Form className="flex flex-col gap-5">
          {/* first name */}

          <TextField isRequired name="firstName" type="text">
            <Label>First Name</Label>
            <Input placeholder="Enter your first name" />
            <FieldError />
          </TextField>

          {/* last name */}

          <TextField isRequired name="lastName" type="text">
            <Label>Last Name</Label>
            <Input placeholder="Enter your last name" />
            <FieldError />
          </TextField>

          {/* email */}

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* phone number */}

          <TextField isRequired name="phone" type="tel">
            <Label>Phone Number</Label>
            <Input placeholder="+91 9876543210" />
            <FieldError />
          </TextField>

          {/* password */}

          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

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
      </div>
    </div>
  );
};

export default App;
