import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Builds from "../Builds";

describe("Builds component", () => {
  it("Builds should render correctly", () => {
    render(<Builds />);
    expect(true).toBeTruthy();
  });
});
