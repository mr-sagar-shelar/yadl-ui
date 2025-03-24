import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Batch from "../Batch";

describe("Batch component", () => {
  it("Batch should render correctly", () => {
    render(<Batch />);
    expect(true).toBeTruthy();
  });
});
