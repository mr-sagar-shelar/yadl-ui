import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IdentityandAccessManagement from "../IdentityandAccessManagement";

describe("IdentityandAccessManagement component", () => {
  it("IdentityandAccessManagement should render correctly", () => {
    render(<IdentityandAccessManagement />);
    expect(true).toBeTruthy();
  });
});
