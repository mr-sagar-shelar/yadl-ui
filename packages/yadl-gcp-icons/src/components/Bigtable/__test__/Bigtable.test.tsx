import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bigtable from "../Bigtable";

describe("Bigtable component", () => {
  it("Bigtable should render correctly", () => {
    render(<Bigtable />);
    expect(true).toBeTruthy();
  });
});
