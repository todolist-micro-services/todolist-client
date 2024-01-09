import React from "react";

import { useAppSelector } from "@core/utils";
import { sendErrorMessage } from "@app/errorMessage/index.ts";

function Error() {
  const errorMessage = useAppSelector((state) => state.error);

  React.useEffect(() => {
    errorMessage.errorMessage && sendErrorMessage(errorMessage.errorMessage);
  }, [errorMessage.id]);

  return <div />;
}

export { Error };
