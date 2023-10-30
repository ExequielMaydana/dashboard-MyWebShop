import React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Producto",
  },
  {
    id: "create_at",
    numeric: true,
    disablePadding: false,
    label: "Creado",
  },
  {
    id: "stock",
    numeric: true,
    disablePadding: false,
    label: "Cantidad",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Precio",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Estado",
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "Acciones",
  },
];

const EnhancedTableHead = (props) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <>
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="center"
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default EnhancedTableHead;
