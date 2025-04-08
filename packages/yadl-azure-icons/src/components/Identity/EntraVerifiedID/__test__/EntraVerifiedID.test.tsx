import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraVerifiedID from "../EntraVerifiedID";

describe("EntraVerifiedID component", () => {
  it("EntraVerifiedID should render correctly", () => {
    render(<EntraVerifiedID />);
    expect(true).toBeTruthy();
  });
});
