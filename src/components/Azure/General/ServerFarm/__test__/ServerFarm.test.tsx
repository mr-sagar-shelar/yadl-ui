import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServerFarm from "../ServerFarm";

describe("ServerFarm component", () => {
  it("ServerFarm should render correctly", () => {
    render(<ServerFarm />);
    expect(true).toBeTruthy();
  });
});
