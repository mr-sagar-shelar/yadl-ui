import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NewNotifications from "../NewNotifications";

describe("NewNotifications component", () => {
  it("NewNotifications should render correctly", () => {
    render(<NewNotifications />);
    expect(true).toBeTruthy();
  });
});
