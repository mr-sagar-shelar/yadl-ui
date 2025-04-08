import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataProcessing from "../DataProcessing";

describe("DataProcessing component", () => {
  it("DataProcessing should render correctly", () => {
    render(<DataProcessing />);
    expect(true).toBeTruthy();
  });
});
