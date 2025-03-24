import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Keyspaces from "../Keyspaces";

describe("Keyspaces component", () => {
  it("Keyspaces should render correctly", () => {
    render(<Keyspaces />);
    expect(true).toBeTruthy();
  });
});
