import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudJobsApi from "../CloudJobsApi";

describe("CloudJobsApi component", () => {
  it("CloudJobsApi should render correctly", () => {
    render(<CloudJobsApi />);
    expect(true).toBeTruthy();
  });
});
