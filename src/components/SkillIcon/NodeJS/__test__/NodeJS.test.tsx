import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NodeJS from "../NodeJS";

describe("NodeJS component", () => {
  it("NodeJS should render correctly", () => {
    render(<NodeJS />);
    expect(true).toBeTruthy();
  });
});
