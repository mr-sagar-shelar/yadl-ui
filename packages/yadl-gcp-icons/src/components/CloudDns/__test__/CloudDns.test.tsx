import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudDns from "../CloudDns";

describe("CloudDns component", () => {
  it("CloudDns should render correctly", () => {
    render(<CloudDns />);
    expect(true).toBeTruthy();
  });
});
