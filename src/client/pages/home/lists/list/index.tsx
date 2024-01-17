import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { generateColorFromName } from "@utils/colorFromName.ts";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";
import {
  useAllProjectListsRetrieval,
  useUserRetrieval,
} from "@core/viewModels";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function List({ list, tasks }: Props) {
  const { t } = useTranslation();
  const { pushView } = useWrapperContext();
  const { user } = useUserRetrieval();
  const { lists } = useAllProjectListsRetrieval();

  return (
    <Card sx={{ minWidth: "20rem", width: 0 }} className={styles.card}>
      <div
        style={{
          width: "100%",
          height: "1rem",
          backgroundColor: generateColorFromName(list.name),
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          style={{ cursor: "pointer" }}
          component="div"
          onClick={() =>
            pushView({ useCase: UseCases.UpdateList, data: { list } })
          }
        >
          {list.name}
        </Typography>
        <CardActions>
          <Button
            startIcon={<AddIcon />}
            variant={"contained"}
            size="small"
            onClick={() =>
              pushView({ useCase: UseCases.CreateTask, data: { list, user } })
            }
          >
            {t("pages.home.list.addTask")}
          </Button>
        </CardActions>
        <div className={styles.tasks}>
          {tasks.map((task, key) => (
            <Box
              key={key}
              className={styles.task}
              onClick={() =>
                pushView({
                  useCase: UseCases.UpdateTask,
                  data: { task, lists },
                })
              }
            >
              <p className={styles.name}>{task.name}</p>
              <IconButton
                className={styles.iconTrash}
                onClick={(e) => {
                  e.stopPropagation();
                  pushView({
                    useCase: UseCases.DeleteTask,
                    data: { task },
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { List };
