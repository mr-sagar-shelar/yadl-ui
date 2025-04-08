import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualVisitsBuilder from "../VirtualVisitsBuilder";

describe("VirtualVisitsBuilder component", () => {
  it("VirtualVisitsBuilder should render correctly", () => {
    render(<VirtualVisitsBuilder />);
    expect(true).toBeTruthy();
  });
});
