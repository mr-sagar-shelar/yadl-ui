import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedInstanceApacheCassandra from "../ManagedInstanceApacheCassandra";

describe("ManagedInstanceApacheCassandra component", () => {
  it("ManagedInstanceApacheCassandra should render correctly", () => {
    render(<ManagedInstanceApacheCassandra />);
    expect(true).toBeTruthy();
  });
});
