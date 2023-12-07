import { Box, Card, CardHeader } from "@mui/material";
import { DataGrid, GridCallbackDetails, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import { GridValidRowModel } from "@mui/x-data-grid/models/gridRows";

import React, { ComponentProps, useEffect } from "react";

export interface SortOptions<T extends Record<string, any>> {
  property: keyof T;
  sort: "asc" | "desc";
}

export type PaginationParams = {
  pageSize: number;
  pageNumber: number;
};

interface Props<T extends GridValidRowModel = any> extends Omit<Omit<ComponentProps<typeof DataGrid<T>>, "onSortModelChange">, "loading"> {
  disableClick?: boolean;
  noPagination?: boolean;
  isLoading?: boolean;
  defaultSort?: {
    property: string;
    sort: "asc" | "desc";
  };
  title?: string;
  totalCount?: number;
  onPaginationChange?: (model: PaginationParams) => void | undefined;
  onSortModelChange?: (model: SortOptions<T>) => void;
  paginationParams?: PaginationParams;
}

export const DataTable = <T extends GridValidRowModel = any>({
  sortingMode = "server",
  paginationMode = "server",
  onPaginationChange,
  totalCount,
  title,
  defaultSort,
  isLoading = false,
  onSortModelChange,
  paginationParams = { pageSize: 100, pageNumber: 1 },
  ...props
}: Props<T>) => {
  const initSort: GridSortModel = [{ sort: defaultSort?.sort || "asc", field: defaultSort?.property || "name" }];

  useEffect(() => {
    onSortModelChange?.({ sort: initSort[0].sort || "asc", property: initSort[0].field });
  }, []);

  const paginationModel = { page: paginationParams.pageNumber - 1, pageSize: paginationParams.pageSize };
  const handlePaginationEvent = (model: GridPaginationModel, details: GridCallbackDetails) => {
    if (onPaginationChange && !!details.reason) {
      onPaginationChange({ pageSize: model.pageSize, pageNumber: model.page + 1 });
    }
  };

  return (
    <Box sx={{ height: "100%" }}>
      {title && <CardHeader title={title} />}
      <Card>
        <DataGrid<T>
          {...props}
          loading={isLoading}
          columns={props.columns.map((x) => ({ ...x, sortingOrder: ["asc", "desc"], disableColumnMenu: true }))}
          autoHeight
          pagination
          rowCount={totalCount ?? props.rows.length}
          sortingMode={sortingMode}
          onSortModelChange={(model) => {
            if (model.length === 0) return;
            onSortModelChange?.({ sort: model?.[0].sort || "asc", property: model?.[0].field });
          }}
          paginationModel={paginationModel}
          onPaginationModelChange={handlePaginationEvent}
          paginationMode={paginationMode}
          getRowId={(row) => {
            return row?.id;
          }}
          slotProps={{
            baseButton: {
              size: "medium",
              variant: "text",
            },
          }}
        />
      </Card>
    </Box>
  );
};
