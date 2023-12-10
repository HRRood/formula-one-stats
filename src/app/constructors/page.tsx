"use client";
import { Box, Typography } from "@mui/material";
import { ConstructorsPage } from "./constructorsPage";
import { Container } from "@/components/global/container";
import { Button } from "@/components/global/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
        <Typography variant="h4">Constructors</Typography>
        <Button
          onClick={() => {
            router.push("/constructors/new-constructor");
          }}
          size="small"
          variant="contained"
          color="primary"
        >
          New
        </Button>
      </Box>
      <Box>
        <ConstructorsPage />
      </Box>
    </Container>
  );
}
