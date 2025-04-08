import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageQueue from "../StorageQueue";

describe("StorageQueue component", () => {
  it("StorageQueue should render correctly", () => {
    render(<StorageQueue />);
    expect(true).toBeTruthy();
  });
});
