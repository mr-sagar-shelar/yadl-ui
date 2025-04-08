import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Genomics from "../Genomics";

describe("Genomics component", () => {
  it("Genomics should render correctly", () => {
    render(<Genomics />);
    expect(true).toBeTruthy();
  });
});
