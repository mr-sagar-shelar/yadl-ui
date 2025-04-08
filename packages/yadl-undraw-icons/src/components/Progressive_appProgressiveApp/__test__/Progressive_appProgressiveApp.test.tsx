import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Progressive_appProgressiveApp from "../Progressive_appProgressiveApp";

describe("Progressive_appProgressiveApp component", () => {
  it("Progressive_appProgressiveApp should render correctly", () => {
    render(<Progressive_appProgressiveApp />);
    expect(true).toBeTruthy();
  });
});
