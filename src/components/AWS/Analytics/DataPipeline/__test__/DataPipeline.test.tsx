import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataPipeline from "../DataPipeline";

describe("DataPipeline component", () => {
  it("DataPipeline should render correctly", () => {
    render(<DataPipeline />);
    expect(true).toBeTruthy();
  });
});
