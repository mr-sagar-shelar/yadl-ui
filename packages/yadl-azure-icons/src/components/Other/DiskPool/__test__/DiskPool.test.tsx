import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DiskPool from "../DiskPool";

describe("DiskPool component", () => {
  it("DiskPool should render correctly", () => {
    render(<DiskPool />);
    expect(true).toBeTruthy();
  });
});
