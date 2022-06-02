import React from "react";
import { Container, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const { pathname } = useLocation();
  return (
    <div className="back-img">
      <Container maxWidth="lg">
        {pathname !== "/admin/add" ? (
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="add"
          >
            <IconButton>
              <AddCircleIcon fontSize="large" style={{ color: "black" }} />
            </IconButton>
          </Link>
        ) : null}

        <Outlet />
      </Container>
      <br />
    </div>
  );
};

export default Admin;
