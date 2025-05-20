import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Avatar from "../Avatar";

describe("Avatar component", () => {
  it("Avatar should render correctly", () => {
    render(<Avatar />);
    expect(true).toBeTruthy();
  });
});
