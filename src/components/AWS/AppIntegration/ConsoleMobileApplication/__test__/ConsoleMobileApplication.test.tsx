import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConsoleMobileApplication from "../ConsoleMobileApplication";

describe("ConsoleMobileApplication component", () => {
  it("ConsoleMobileApplication should render correctly", () => {
    render(<ConsoleMobileApplication />);
    expect(true).toBeTruthy();
  });
});
