import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Workbooks from "../Workbooks";

describe("Workbooks component", () => {
  it("Workbooks should render correctly", () => {
    render(<Workbooks />);
    expect(true).toBeTruthy();
  });
});
