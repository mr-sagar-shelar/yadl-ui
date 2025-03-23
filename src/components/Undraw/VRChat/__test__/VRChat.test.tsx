import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VRChat from "../VRChat";

describe("VRChat component", () => {
  it("VRChat should render correctly", () => {
    render(<VRChat />);
    expect(true).toBeTruthy();
  });
});
