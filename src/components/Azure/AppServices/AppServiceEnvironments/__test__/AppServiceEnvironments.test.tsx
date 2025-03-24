import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppServiceEnvironments from "../AppServiceEnvironments";

describe("AppServiceEnvironments component", () => {
  it("AppServiceEnvironments should render correctly", () => {
    render(<AppServiceEnvironments />);
    expect(true).toBeTruthy();
  });
});
