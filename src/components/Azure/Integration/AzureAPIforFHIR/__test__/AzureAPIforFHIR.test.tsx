import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureAPIforFHIR from "../AzureAPIforFHIR";

describe("AzureAPIforFHIR component", () => {
  it("AzureAPIforFHIR should render correctly", () => {
    render(<AzureAPIforFHIR />);
    expect(true).toBeTruthy();
  });
});
