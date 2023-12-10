"use client";
import { Box, Typography } from "@mui/material";
import { DriversInfoPage } from "./driversInfoPage";
import { Container } from "@/components/global/container";
import { Button } from "@/components/global/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
        <Typography variant="h4">Drivers Info</Typography>
        <Button
          onClick={() => {
            router.push("/drivers-info/new-driver-info");
          }}
          size="small"
          variant="contained"
          color="primary"
        >
          New
        </Button>
      </Box>
      <Box>
        <DriversInfoPage />
      </Box>
    </Container>
  );
}
