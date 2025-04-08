import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IdentityGovernance from "../IdentityGovernance";

describe("IdentityGovernance component", () => {
  it("IdentityGovernance should render correctly", () => {
    render(<IdentityGovernance />);
    expect(true).toBeTruthy();
  });
});
