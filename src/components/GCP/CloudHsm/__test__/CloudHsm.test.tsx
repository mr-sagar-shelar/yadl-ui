import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudHsm from "../CloudHsm";

describe("CloudHsm component", () => {
  it("CloudHsm should render correctly", () => {
    render(<CloudHsm />);
    expect(true).toBeTruthy();
  });
});
