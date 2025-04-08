import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ceres from "../Ceres";

describe("Ceres component", () => {
  it("Ceres should render correctly", () => {
    render(<Ceres />);
    expect(true).toBeTruthy();
  });
});
