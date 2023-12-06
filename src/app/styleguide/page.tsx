"use client";

import { Button } from "@/components/global/button";
import { Box, Typography } from "@mui/material";

export default function StyleGuidePage() {
  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box sx={{ background: (theme) => theme.palette.background.paper, padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h3">Typography</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography variant="h1">h1</Typography>
          <Typography variant="h2">h2</Typography>
          <Typography variant="h3">h3</Typography>
          <Typography variant="h4">h4</Typography>
          <Typography variant="h5">h5</Typography>
          <Typography variant="h6">h6</Typography>
          <Typography variant="body1">body1</Typography>
          <Typography variant="body2">body2</Typography>
          <Typography variant="button">button</Typography>
          <Typography variant="caption">caption</Typography>
          <Typography variant="overline">overline</Typography>
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="subtitle2">subtitle2</Typography>
        </Box>
      </Box>
      <Box sx={{ background: (theme) => theme.palette.background.paper, padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h3">Buttons</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="subtitle1">Contained</Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" color="primary.light">
              Primary Light
            </Button>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="primary.dark">
              Primary Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" color="secondary.light">
              Secondary Light
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="secondary.dark">
              Secondary Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" color="error.light">
              Error Light
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="error.dark">
              Error Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" color="info.light">
              Info Light
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="info.dark">
              Info Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" color="success.light">
              Success Light
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="success.dark">
              Success Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" color="warning.light">
              Warning Light
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="warning.dark">
              Warning Dark
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="subtitle1">Outlined</Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="outlined" color="primary.light">
              Primary Light
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="primary.dark">
              Primary Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="outlined" color="secondary.light">
              Secondary Light
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="secondary.dark">
              Secondary Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="outlined" color="error.light">
              Error Light
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="outlined" color="error.dark">
              Error Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="outlined" color="info.light">
              Info Light
            </Button>
            <Button variant="outlined" color="info">
              Info
            </Button>
            <Button variant="outlined" color="info.dark">
              Info Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="outlined" color="success.light">
              Success Light
            </Button>
            <Button variant="outlined" color="success">
              Success
            </Button>
            <Button variant="outlined" color="success.dark">
              Success Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="outlined" color="warning.light">
              Warning Light
            </Button>
            <Button variant="outlined" color="warning">
              Warning
            </Button>
            <Button variant="outlined" color="warning.dark">
              Warning Dark
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="subtitle1">Text</Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="text" color="primary.light">
              Primary Light
            </Button>
            <Button variant="text" color="primary">
              Primary
            </Button>
            <Button variant="text" color="primary.dark">
              Primary Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="text" color="secondary.light">
              Secondary Light
            </Button>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
            <Button variant="text" color="secondary.dark">
              Secondary Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="text" color="error.light">
              Error Light
            </Button>
            <Button variant="text" color="error">
              Error
            </Button>
            <Button variant="text" color="error.dark">
              Error Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="text" color="info.light">
              Info Light
            </Button>
            <Button variant="text" color="info">
              Info
            </Button>
            <Button variant="text" color="info.dark">
              Info Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="text" color="success.light">
              Success Light
            </Button>
            <Button variant="text" color="success">
              Success
            </Button>
            <Button variant="text" color="success.dark">
              Success Dark
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="text" color="warning.light">
              Warning Light
            </Button>
            <Button variant="text" color="warning">
              Warning
            </Button>
            <Button variant="text" color="warning.dark">
              Warning Dark
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
