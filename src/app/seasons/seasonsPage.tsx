"use client";

import { useGetAllSeasons } from "@/hooks/season/useGetAllSeasons";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Season } from "@prisma/client";

export const cols: GridColDef<Season>[] = [
  {
    flex: 0.3,
    field: "year",
    minWidth: 240,
    headerName: "Year",
    renderCell: ({ row }) => <Typography>{row.year}</Typography>,
  },
];

export const SeasonsPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data } = useGetAllSeasons(pageNumber);

  return (
    <Box>
      <DataGrid columns={cols} rows={data?.items || []} />
    </Box>
  );
};
