import { render } from "@testing-library/react";
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";
import App from "./App";


test("App component", () => {
  const date = new Date();
  const year = date.getFullYear();
  const getYear = getFullYear();
  expect(year).toEqual(getYear);
});

test("getFooterCopy", () => {
  const holberonText = getFooterCopy();
  expect(holberonText).toEqual("Holberton School main dashboard");
});

test("get the latest notification", () => {
  const notifText = getLatestNotification();
  expect(notifText).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
});