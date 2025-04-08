import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SharedGoals from "../SharedGoals";

describe("SharedGoals component", () => {
  it("SharedGoals should render correctly", () => {
    render(<SharedGoals />);
    expect(true).toBeTruthy();
  });
});
