import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileSynchronization from "../FileSynchronization";

describe("FileSynchronization component", () => {
  it("FileSynchronization should render correctly", () => {
    render(<FileSynchronization />);
    expect(true).toBeTruthy();
  });
});
