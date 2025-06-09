import React from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Form, Input, Button } from "@heroui/react";

export default function ForgetPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Reset your password</h1>
          <div className="rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-6">
            <p className="text-sm">Enter your user account's verified email address and we will send you a password reset link.</p>
            <Form className="w-full max-w-xs">
              <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" variant="bordered">
                Submit
              </Button>
            </Form>
          </div>

        </div>
      </section>
    </DefaultLayout>
  );
}