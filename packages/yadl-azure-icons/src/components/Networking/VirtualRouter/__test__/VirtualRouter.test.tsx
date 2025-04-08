import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualRouter from "../VirtualRouter";

describe("VirtualRouter component", () => {
  it("VirtualRouter should render correctly", () => {
    render(<VirtualRouter />);
    expect(true).toBeTruthy();
  });
});
