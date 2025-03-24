import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImportExportJobs from "../ImportExportJobs";

describe("ImportExportJobs component", () => {
  it("ImportExportJobs should render correctly", () => {
    render(<ImportExportJobs />);
    expect(true).toBeTruthy();
  });
});
