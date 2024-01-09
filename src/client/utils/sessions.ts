// import * as Keychain from "react-native-keychain";
import Cookies from "js-cookie";

const getDaysDifference = (expirationDate: Date): number => {
  const currentDate = new Date();
  const differenceInMs = expirationDate.getTime() - currentDate.getTime();
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  return Math.max(differenceInDays, 1);
};

function setSession(name: string, data: string, expirationDate: Date) {
  Cookies.set(name, data, { expires: getDaysDifference(expirationDate) });
}

function retrieveSession(name: string) {
  return Cookies.get(name);
}

function removeSession(name: string) {
  return Cookies.remove(name);
}

export { setSession, retrieveSession, removeSession };
