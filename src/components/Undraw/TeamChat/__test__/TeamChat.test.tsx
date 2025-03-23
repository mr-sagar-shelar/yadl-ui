import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeamChat from "../TeamChat";

describe("TeamChat component", () => {
  it("TeamChat should render correctly", () => {
    render(<TeamChat />);
    expect(true).toBeTruthy();
  });
});
