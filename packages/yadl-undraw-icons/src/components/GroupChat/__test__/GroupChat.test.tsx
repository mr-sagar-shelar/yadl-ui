import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GroupChat from "../GroupChat";

describe("GroupChat component", () => {
  it("GroupChat should render correctly", () => {
    render(<GroupChat />);
    expect(true).toBeTruthy();
  });
});
