import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Angular from "../Angular";

describe("Angular component", () => {
  it("Angular should render correctly", () => {
    render(<Angular />);
    expect(true).toBeTruthy();
  });
});
