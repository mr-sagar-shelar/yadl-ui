import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Team from "../Team";

describe("Team component", () => {
  it("Team should render correctly", () => {
    render(<Team />);
    expect(true).toBeTruthy();
  });
});
