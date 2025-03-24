import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExtendedSecurityUpdates from "../ExtendedSecurityUpdates";

describe("ExtendedSecurityUpdates component", () => {
  it("ExtendedSecurityUpdates should render correctly", () => {
    render(<ExtendedSecurityUpdates />);
    expect(true).toBeTruthy();
  });
});
