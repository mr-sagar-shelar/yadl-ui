import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationSecurityGroups from "../ApplicationSecurityGroups";

describe("ApplicationSecurityGroups component", () => {
  it("ApplicationSecurityGroups should render correctly", () => {
    render(<ApplicationSecurityGroups />);
    expect(true).toBeTruthy();
  });
});
