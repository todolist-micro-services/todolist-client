import {toast} from "react-hot-toast";

function sendErrorMessage(message: string) {
    toast.error(message)
}

export { sendErrorMessage };
