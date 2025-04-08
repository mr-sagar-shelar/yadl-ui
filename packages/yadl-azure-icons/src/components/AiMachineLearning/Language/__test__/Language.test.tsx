import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Language from "../Language";

describe("Language component", () => {
  it("Language should render correctly", () => {
    render(<Language />);
    expect(true).toBeTruthy();
  });
});
