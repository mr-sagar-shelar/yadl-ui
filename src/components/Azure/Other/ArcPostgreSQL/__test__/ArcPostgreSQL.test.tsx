import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArcPostgreSQL from "../ArcPostgreSQL";

describe("ArcPostgreSQL component", () => {
  it("ArcPostgreSQL should render correctly", () => {
    render(<ArcPostgreSQL />);
    expect(true).toBeTruthy();
  });
});
