import { Icon as RIcon } from "@iconify/react";

interface Props {
  icon: string;
}

export const Icon = ({ icon }: Props) => {
  return <RIcon icon={icon} fontSize={25} />;
};
