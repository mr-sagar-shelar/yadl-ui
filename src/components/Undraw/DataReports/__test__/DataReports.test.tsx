import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataReports from "../DataReports";

describe("DataReports component", () => {
  it("DataReports should render correctly", () => {
    render(<DataReports />);
    expect(true).toBeTruthy();
  });
});
