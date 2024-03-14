import { Props } from "./types.ts";
import styles from "@pages/settings/styles.module.scss";
import {
  AppBar,
  Avatar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "src/client/components/sideBar";
import { generateColorFromName } from "@utils/colorFromName.ts";
import { useUserRetrieval } from "@core/viewModels";
import { useNavigate } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";
function TopBar({ title }: Props) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { user } = useUserRetrieval();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <AppBar position="static" className={styles.topBar}>
      <Toolbar>
        <React.Fragment key={"left"}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {SideBar()}
          </SwipeableDrawer>
        </React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <div
          style={{
            width: "1rem",
            height: "1rem",
            backgroundColor: generateColorFromName(title),
            borderRadius: "100px",
            marginRight: "0.5rem",
          }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <div onClick={() => navigate("/settings")}>
          <Avatar
            sx={{
              bgcolor: generateColorFromName(user.email),
              cursor: "pointer",
            }}
          >
            {user.firstname === ""
              ? "AN"
              : user.firstname[0] + user.lastname[0]}
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export { TopBar };
