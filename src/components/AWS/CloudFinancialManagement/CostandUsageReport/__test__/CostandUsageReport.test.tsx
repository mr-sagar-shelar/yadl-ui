import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CostandUsageReport from "../CostandUsageReport";

describe("CostandUsageReport component", () => {
  it("CostandUsageReport should render correctly", () => {
    render(<CostandUsageReport />);
    expect(true).toBeTruthy();
  });
});
