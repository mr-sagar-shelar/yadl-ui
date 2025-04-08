import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PinpointAPIs from "../PinpointAPIs";

describe("PinpointAPIs component", () => {
  it("PinpointAPIs should render correctly", () => {
    render(<PinpointAPIs />);
    expect(true).toBeTruthy();
  });
});
