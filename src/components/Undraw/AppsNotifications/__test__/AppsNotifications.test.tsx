import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppsNotifications from "../AppsNotifications";

describe("AppsNotifications component", () => {
  it("AppsNotifications should render correctly", () => {
    render(<AppsNotifications />);
    expect(true).toBeTruthy();
  });
});
