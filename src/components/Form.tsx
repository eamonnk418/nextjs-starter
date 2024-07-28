"use client";

import { Button } from "@zendeskgarden/react-buttons";
import { Field, Input } from "@zendeskgarden/react-forms";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

export const Form = () => {
  const { register } = useForm<FormValues>();

  return (
    <Fragment>
      <Field>
        <Input {...register("firstName")} placeholder="First name" />
        <Input {...register("lastName")} placeholder="Last name" />
        <Button type="submit">Submit</Button>
      </Field>
    </Fragment>
  );
};


/**
 * NOTES
 * https://nehalist.io/react-hook-form-with-nextjs-server-actions/
 */