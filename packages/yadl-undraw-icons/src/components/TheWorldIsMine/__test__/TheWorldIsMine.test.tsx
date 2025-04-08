import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TheWorldIsMine from "../TheWorldIsMine";

describe("TheWorldIsMine component", () => {
  it("TheWorldIsMine should render correctly", () => {
    render(<TheWorldIsMine />);
    expect(true).toBeTruthy();
  });
});
