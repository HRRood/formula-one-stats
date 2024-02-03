import { Icon, IconProps } from "@iconify/react";
import React from "react";

export const IconifyIcon = ({ icon, ...rest }: IconProps) => {
  return <Icon icon={icon} fontSize="1.375rem" {...rest} />;
};
