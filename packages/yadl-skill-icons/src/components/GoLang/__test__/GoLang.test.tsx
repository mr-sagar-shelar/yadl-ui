import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoLang from "../GoLang";

describe("GoLang component", () => {
  it("GoLang should render correctly", () => {
    render(<GoLang />);
    expect(true).toBeTruthy();
  });
});
