import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import True_loveTrueLove from "../True_loveTrueLove";

describe("True_loveTrueLove component", () => {
  it("True_loveTrueLove should render correctly", () => {
    render(<True_loveTrueLove />);
    expect(true).toBeTruthy();
  });
});
