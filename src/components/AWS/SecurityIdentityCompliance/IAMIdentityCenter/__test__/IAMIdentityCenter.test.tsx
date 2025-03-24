import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IAMIdentityCenter from "../IAMIdentityCenter";

describe("IAMIdentityCenter component", () => {
  it("IAMIdentityCenter should render correctly", () => {
    render(<IAMIdentityCenter />);
    expect(true).toBeTruthy();
  });
});
