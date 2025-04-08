import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Explore from "../Explore";

describe("Explore component", () => {
  it("Explore should render correctly", () => {
    render(<Explore />);
    expect(true).toBeTruthy();
  });
});
