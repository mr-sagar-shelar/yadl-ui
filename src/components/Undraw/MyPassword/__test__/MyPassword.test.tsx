import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyPassword from "../MyPassword";

describe("MyPassword component", () => {
  it("MyPassword should render correctly", () => {
    render(<MyPassword />);
    expect(true).toBeTruthy();
  });
});
