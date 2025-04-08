import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FillIn from "../FillIn";

describe("FillIn component", () => {
  it("FillIn should render correctly", () => {
    render(<FillIn />);
    expect(true).toBeTruthy();
  });
});
