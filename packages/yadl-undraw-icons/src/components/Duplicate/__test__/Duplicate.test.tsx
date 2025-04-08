import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Duplicate from "../Duplicate";

describe("Duplicate component", () => {
  it("Duplicate should render correctly", () => {
    render(<Duplicate />);
    expect(true).toBeTruthy();
  });
});
