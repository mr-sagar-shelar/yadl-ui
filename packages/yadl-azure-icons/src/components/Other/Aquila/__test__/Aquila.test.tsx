import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Aquila from "../Aquila";

describe("Aquila component", () => {
  it("Aquila should render correctly", () => {
    render(<Aquila />);
    expect(true).toBeTruthy();
  });
});
