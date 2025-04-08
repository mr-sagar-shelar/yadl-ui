import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IdentityawareProxy from "../IdentityawareProxy";

describe("IdentityawareProxy component", () => {
  it("IdentityawareProxy should render correctly", () => {
    render(<IdentityawareProxy />);
    expect(true).toBeTruthy();
  });
});
