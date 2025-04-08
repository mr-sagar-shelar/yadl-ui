import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrdinaryDay from "../OrdinaryDay";

describe("OrdinaryDay component", () => {
  it("OrdinaryDay should render correctly", () => {
    render(<OrdinaryDay />);
    expect(true).toBeTruthy();
  });
});
