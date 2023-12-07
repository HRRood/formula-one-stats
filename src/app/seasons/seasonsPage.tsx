"use client";

import { useGetAllSeasons } from "@/api/season/useGetAllSeasons";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Season } from "@prisma/client";
import { DataTable, PaginationParams } from "@/components/dataTable/DataTable";

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
  const [pagination, setPagination] = useState<PaginationParams>({ pageNumber: 1, pageSize: 10 });
  const { data, isLoading } = useGetAllSeasons({ pagination });

  return (
    <Box>
      <DataTable
        columns={cols}
        rows={data?.items || []}
        isLoading={isLoading}
        pagination
        onPaginationChange={setPagination}
        paginationParams={pagination}
        pageSizeOptions={[1, 10]}
        totalCount={data?.pagination.totalItems || 0}
      />
    </Box>
  );
};
