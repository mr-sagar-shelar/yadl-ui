import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WindowsNotificationServices from "../WindowsNotificationServices";

describe("WindowsNotificationServices component", () => {
  it("WindowsNotificationServices should render correctly", () => {
    render(<WindowsNotificationServices />);
    expect(true).toBeTruthy();
  });
});
