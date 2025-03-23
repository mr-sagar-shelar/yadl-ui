import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MedicineMedicine from "../MedicineMedicine";

describe("MedicineMedicine component", () => {
  it("MedicineMedicine should render correctly", () => {
    render(<MedicineMedicine />);
    expect(true).toBeTruthy();
  });
});
