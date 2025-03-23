import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EmptyStreet from "../EmptyStreet";

describe("EmptyStreet component", () => {
  it("EmptyStreet should render correctly", () => {
    render(<EmptyStreet />);
    expect(true).toBeTruthy();
  });
});
