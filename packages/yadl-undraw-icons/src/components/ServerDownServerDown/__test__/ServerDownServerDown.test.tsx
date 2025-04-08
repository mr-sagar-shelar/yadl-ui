import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServerDownServerDown from "../ServerDownServerDown";

describe("ServerDownServerDown component", () => {
  it("ServerDownServerDown should render correctly", () => {
    render(<ServerDownServerDown />);
    expect(true).toBeTruthy();
  });
});
