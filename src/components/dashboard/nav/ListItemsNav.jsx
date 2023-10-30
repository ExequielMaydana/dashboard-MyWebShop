import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";

import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import Link from "next/link";

const ListItemsNav = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openCustomers, setOpenCustomers] = useState(false);

  return (
    <>
      <Link href="/dashboard">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Panel" />
        </ListItemButton>
      </Link>

      <>
        <ListItemButton onClick={() => setOpenProducts(!openProducts)}>
          <ListItemIcon>
            <CheckroomOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/dashboard/products/add">
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <AddBoxOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Nuevo producto" />
              </ListItemButton>
            </Link>

            <Link href="/dashboard/products">
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <FormatListBulletedOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Todos los productos" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </>

      <>
        <ListItemButton onClick={() => setOpenOrders(!openOrders)}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Pedidos" />
          {openOrders ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openOrders} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <FormatListBulletedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Todos los pedidos" />
            </ListItemButton>
          </List>
        </Collapse>
      </>
      <>
        <ListItemButton onClick={() => setOpenCustomers(!openCustomers)}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
          {openCustomers ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCustomers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <AddBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Nuevo usuario" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <FormatListBulletedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Todos los clientes" />
            </ListItemButton>
          </List>
        </Collapse>
      </>
    </>
  );
};

export default ListItemsNav;
