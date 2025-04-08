import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataZone from "../DataZone";

describe("DataZone component", () => {
  it("DataZone should render correctly", () => {
    render(<DataZone />);
    expect(true).toBeTruthy();
  });
});
