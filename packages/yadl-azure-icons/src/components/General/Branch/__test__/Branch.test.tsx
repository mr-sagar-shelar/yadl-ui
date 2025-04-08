import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Branch from "../Branch";

describe("Branch component", () => {
  it("Branch should render correctly", () => {
    render(<Branch />);
    expect(true).toBeTruthy();
  });
});
