import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkSecurityPerimeters from "../NetworkSecurityPerimeters";

describe("NetworkSecurityPerimeters component", () => {
  it("NetworkSecurityPerimeters should render correctly", () => {
    render(<NetworkSecurityPerimeters />);
    expect(true).toBeTruthy();
  });
});
