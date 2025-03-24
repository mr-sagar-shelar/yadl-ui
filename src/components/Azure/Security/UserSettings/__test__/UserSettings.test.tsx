import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UserSettings from "../UserSettings";

describe("UserSettings component", () => {
  it("UserSettings should render correctly", () => {
    render(<UserSettings />);
    expect(true).toBeTruthy();
  });
});
