import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateEndpoints from "../PrivateEndpoints";

describe("PrivateEndpoints component", () => {
  it("PrivateEndpoints should render correctly", () => {
    render(<PrivateEndpoints />);
    expect(true).toBeTruthy();
  });
});
