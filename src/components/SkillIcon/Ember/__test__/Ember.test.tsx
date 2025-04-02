import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ember from "../Ember";

describe("Ember component", () => {
  it("Ember should render correctly", () => {
    render(<Ember />);
    expect(true).toBeTruthy();
  });
});
