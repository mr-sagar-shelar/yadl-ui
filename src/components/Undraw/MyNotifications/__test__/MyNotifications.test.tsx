import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyNotifications from "../MyNotifications";

describe("MyNotifications component", () => {
  it("MyNotifications should render correctly", () => {
    render(<MyNotifications />);
    expect(true).toBeTruthy();
  });
});
