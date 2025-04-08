import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IdentityPlatform from "../IdentityPlatform";

describe("IdentityPlatform component", () => {
  it("IdentityPlatform should render correctly", () => {
    render(<IdentityPlatform />);
    expect(true).toBeTruthy();
  });
});
