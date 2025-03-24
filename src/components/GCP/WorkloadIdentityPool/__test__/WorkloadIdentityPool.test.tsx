import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkloadIdentityPool from "../WorkloadIdentityPool";

describe("WorkloadIdentityPool component", () => {
  it("WorkloadIdentityPool should render correctly", () => {
    render(<WorkloadIdentityPool />);
    expect(true).toBeTruthy();
  });
});
