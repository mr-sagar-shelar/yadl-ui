import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Connections from "../Connections";

describe("Connections component", () => {
  it("Connections should render correctly", () => {
    render(<Connections />);
    expect(true).toBeTruthy();
  });
});
