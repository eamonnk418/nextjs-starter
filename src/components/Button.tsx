"use client";

import { Button as GardenButton } from "@zendeskgarden/react-buttons";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <GardenButton {...props}>{children}</GardenButton>;
};
