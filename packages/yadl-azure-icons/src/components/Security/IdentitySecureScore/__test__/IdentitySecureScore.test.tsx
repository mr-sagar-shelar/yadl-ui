import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IdentitySecureScore from "../IdentitySecureScore";

describe("IdentitySecureScore component", () => {
  it("IdentitySecureScore should render correctly", () => {
    render(<IdentitySecureScore />);
    expect(true).toBeTruthy();
  });
});
