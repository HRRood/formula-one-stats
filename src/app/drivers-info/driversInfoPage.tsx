"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable, PaginationParams } from "@/components/dataTable/DataTable";
import Link from "next/link";
import { useGetAllDriversInfo } from "@/api/drivers-info/useGetAllDriversInfo";
import { DriverInfo } from "@/backend/types/dbTypes";

export const cols: GridColDef<DriverInfo>[] = [
  {
    flex: 0.3,
    field: "name",
    headerName: "Name",
    renderCell: ({ row }) => (
      <Link href={`/drivers-info/${row.id}`}>
        <Typography>{row.name}</Typography>
      </Link>
    ),
  },
  {
    flex: 0.3,
    field: "championships",
    headerName: "Championships",
    sortable: true,
    renderCell: ({ row }) => <Typography>{row.championships}</Typography>,
  },
  {
    flex: 0.3,
    field: "wins",
    headerName: "Wins",
    renderCell: ({ row }) => <Typography>{row.wins}</Typography>,
  },
  {
    flex: 0.3,
    field: "podiums",
    headerName: "Podiums",
    renderCell: ({ row }) => <Typography>{row.podiums}</Typography>,
  },
  {
    flex: 0.3,
    field: "fastestLaps",
    headerName: "Fastest Laps",
    renderCell: ({ row }) => <Typography>{row.fastestLaps}</Typography>,
  },
];

export const DriversInfoPage = () => {
  const [pagination, setPagination] = useState<PaginationParams>({ pageNumber: 1, pageSize: 10 });
  const { data, isLoading } = useGetAllDriversInfo({ pagination });

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
