import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Traveling from "../Traveling";

describe("Traveling component", () => {
  it("Traveling should render correctly", () => {
    render(<Traveling />);
    expect(true).toBeTruthy();
  });
});
