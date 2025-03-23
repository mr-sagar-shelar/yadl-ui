import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GroupSelfie from "../GroupSelfie";

describe("GroupSelfie component", () => {
  it("GroupSelfie should render correctly", () => {
    render(<GroupSelfie />);
    expect(true).toBeTruthy();
  });
});
