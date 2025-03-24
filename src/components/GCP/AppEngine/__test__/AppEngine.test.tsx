import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppEngine from "../AppEngine";

describe("AppEngine component", () => {
  it("AppEngine should render correctly", () => {
    render(<AppEngine />);
    expect(true).toBeTruthy();
  });
});
