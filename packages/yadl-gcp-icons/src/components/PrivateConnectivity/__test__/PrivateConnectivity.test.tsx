import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateConnectivity from "../PrivateConnectivity";

describe("PrivateConnectivity component", () => {
  it("PrivateConnectivity should render correctly", () => {
    render(<PrivateConnectivity />);
    expect(true).toBeTruthy();
  });
});
