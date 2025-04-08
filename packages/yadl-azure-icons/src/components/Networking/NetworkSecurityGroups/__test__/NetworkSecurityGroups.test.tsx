import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkSecurityGroups from "../NetworkSecurityGroups";

describe("NetworkSecurityGroups component", () => {
  it("NetworkSecurityGroups should render correctly", () => {
    render(<NetworkSecurityGroups />);
    expect(true).toBeTruthy();
  });
});
