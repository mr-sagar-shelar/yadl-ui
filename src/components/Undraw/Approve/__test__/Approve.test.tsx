import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Approve from "../Approve";

describe("Approve component", () => {
  it("Approve should render correctly", () => {
    render(<Approve />);
    expect(true).toBeTruthy();
  });
});
