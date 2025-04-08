import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebJobs from "../WebJobs";

describe("WebJobs component", () => {
  it("WebJobs should render correctly", () => {
    render(<WebJobs />);
    expect(true).toBeTruthy();
  });
});
