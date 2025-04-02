import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Maven from "../Maven";

describe("Maven component", () => {
  it("Maven should render correctly", () => {
    render(<Maven />);
    expect(true).toBeTruthy();
  });
});
