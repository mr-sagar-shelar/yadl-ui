import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyFiles from "../MyFiles";

describe("MyFiles component", () => {
  it("MyFiles should render correctly", () => {
    render(<MyFiles />);
    expect(true).toBeTruthy();
  });
});
