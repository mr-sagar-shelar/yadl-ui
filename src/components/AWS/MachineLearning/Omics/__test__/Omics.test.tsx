import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Omics from "../Omics";

describe("Omics component", () => {
  it("Omics should render correctly", () => {
    render(<Omics />);
    expect(true).toBeTruthy();
  });
});
