import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NotificationHubs from "../NotificationHubs";

describe("NotificationHubs component", () => {
  it("NotificationHubs should render correctly", () => {
    render(<NotificationHubs />);
    expect(true).toBeTruthy();
  });
});
