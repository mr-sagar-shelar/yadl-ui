import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VueJS from "../VueJS";

describe("VueJS component", () => {
  it("VueJS should render correctly", () => {
    render(<VueJS />);
    expect(true).toBeTruthy();
  });
});
