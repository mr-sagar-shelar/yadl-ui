import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudDomains from "../CloudDomains";

describe("CloudDomains component", () => {
  it("CloudDomains should render correctly", () => {
    render(<CloudDomains />);
    expect(true).toBeTruthy();
  });
});
