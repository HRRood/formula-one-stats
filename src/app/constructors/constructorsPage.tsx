"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable, PaginationParams } from "@/components/dataTable/DataTable";
import Link from "next/link";
import { useGetAllConstructors } from "@/datafetching/constructor/useGetAllConstructors";
import { ConstructorTeam } from "@/backend/types/dbTypes";

export const cols: GridColDef<ConstructorTeam>[] = [
  {
    flex: 0.3,
    field: "name",
    minWidth: 240,
    headerName: "Name",
    renderCell: ({ row }) => (
      <Link href={`/constructors/${row.id}`}>
        <Typography>{row.name}</Typography>
      </Link>
    ),
  },
  {
    flex: 0.3,
    field: "countryOrigin",
    minWidth: 240,
    headerName: "Country Origin",
    renderCell: ({ row }) => <Typography>{row.countryOrigin}</Typography>,
  },
  {
    flex: 0.3,
    field: "season.id",
    minWidth: 240,
    headerName: "Season",
    renderCell: ({ row }) => <Typography>{row.Season.year}</Typography>,
  },
];

export const ConstructorsPage = () => {
  const [pagination, setPagination] = useState<PaginationParams>({ pageNumber: 1, pageSize: 10 });
  const { data, isLoading } = useGetAllConstructors({ pagination });

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
