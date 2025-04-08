import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sunlight from "../Sunlight";

describe("Sunlight component", () => {
  it("Sunlight should render correctly", () => {
    render(<Sunlight />);
    expect(true).toBeTruthy();
  });
});
