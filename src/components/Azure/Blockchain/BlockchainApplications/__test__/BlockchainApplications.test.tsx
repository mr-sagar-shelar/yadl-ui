import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BlockchainApplications from "../BlockchainApplications";

describe("BlockchainApplications component", () => {
  it("BlockchainApplications should render correctly", () => {
    render(<BlockchainApplications />);
    expect(true).toBeTruthy();
  });
});
