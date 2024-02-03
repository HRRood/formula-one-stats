"use client";

import Image from "next/image";
import { Box, List, Link, ListItem } from "@mui/material";

export const Navbar = () => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        padding: "10px",
        height: "100px",
      }}
    >
      <Box
        sx={{
          marginRight: "20px",
          height: "100%",
          width: "150px",
          position: "relative",
          objectFit: "contain",
          padding: "10px 20px",
        }}
      >
        <Link href="/">
          <Image src="/logo.png" fill alt="Logo" />
        </Link>
      </Box>
      <List sx={{ display: "flex", listStyle: "none", marginLeft: "auto", fontSize: "18px", fontWeight: "bold" }}>
        <ListItem sx={{ width: "fit-content" }}>
          <Link href="/seasons">Seasons</Link>
        </ListItem>
        <ListItem sx={{ width: "fit-content" }}>
          <Link href="/constructors">Constructors</Link>
        </ListItem>
        <ListItem sx={{ width: "fit-content" }}>
          <Link href="/drivers-info">Drivers</Link>
        </ListItem>
      </List>
    </Box>
  );
};
