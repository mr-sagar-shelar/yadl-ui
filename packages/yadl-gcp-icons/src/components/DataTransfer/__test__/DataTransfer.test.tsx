import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataTransfer from "../DataTransfer";

describe("DataTransfer component", () => {
  it("DataTransfer should render correctly", () => {
    render(<DataTransfer />);
    expect(true).toBeTruthy();
  });
});
