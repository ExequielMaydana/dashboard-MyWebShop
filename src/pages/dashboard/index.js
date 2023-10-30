import Chart from "@/components/dashboard/visualizations/Chart";
import Deposit from "@/components/dashboard/visualizations/Deposit";
import Layout from "@/components/dashboard/Layout";
import Orders from "@/components/dashboard/orders/Orders";
import { Grid, Paper } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Layout page="Inicio">
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Deposit />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Dashboard;
