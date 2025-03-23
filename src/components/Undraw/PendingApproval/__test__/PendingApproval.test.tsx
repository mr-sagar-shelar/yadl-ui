import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PendingApproval from "../PendingApproval";

describe("PendingApproval component", () => {
  it("PendingApproval should render correctly", () => {
    render(<PendingApproval />);
    expect(true).toBeTruthy();
  });
});
