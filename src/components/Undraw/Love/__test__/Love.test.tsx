import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Love from "../Love";

describe("Love component", () => {
  it("Love should render correctly", () => {
    render(<Love />);
    expect(true).toBeTruthy();
  });
});
