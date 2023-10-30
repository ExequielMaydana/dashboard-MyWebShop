import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function preventDefault(event) {
  event.preventDefault();
}

const Deposit = () => {
  return (
    <>
      <h2>Depositos</h2>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver balance
        </Link>
      </div>
    </>
  );
};

export default Deposit;
