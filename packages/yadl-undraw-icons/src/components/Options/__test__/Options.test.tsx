import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Options from "../Options";

describe("Options component", () => {
  it("Options should render correctly", () => {
    render(<Options />);
    expect(true).toBeTruthy();
  });
});
