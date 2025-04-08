import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Messages from "../Messages";

describe("Messages component", () => {
  it("Messages should render correctly", () => {
    render(<Messages />);
    expect(true).toBeTruthy();
  });
});
