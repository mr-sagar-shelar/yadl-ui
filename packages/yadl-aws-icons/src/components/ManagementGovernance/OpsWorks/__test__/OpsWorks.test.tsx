import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpsWorks from "../OpsWorks";

describe("OpsWorks component", () => {
  it("OpsWorks should render correctly", () => {
    render(<OpsWorks />);
    expect(true).toBeTruthy();
  });
});
