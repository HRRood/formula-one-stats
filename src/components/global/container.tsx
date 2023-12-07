import { Box } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <Box sx={{ maxWidth: "1200px", margin: "auto" }}>{children}</Box>;
};
