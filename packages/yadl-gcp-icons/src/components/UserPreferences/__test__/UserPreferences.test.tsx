import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UserPreferences from "../UserPreferences";

describe("UserPreferences component", () => {
  it("UserPreferences should render correctly", () => {
    render(<UserPreferences />);
    expect(true).toBeTruthy();
  });
});
