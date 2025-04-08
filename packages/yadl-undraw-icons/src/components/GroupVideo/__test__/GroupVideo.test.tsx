import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GroupVideo from "../GroupVideo";

describe("GroupVideo component", () => {
  it("GroupVideo should render correctly", () => {
    render(<GroupVideo />);
    expect(true).toBeTruthy();
  });
});
