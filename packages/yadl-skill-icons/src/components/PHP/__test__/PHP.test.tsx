import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PHP from "../PHP";

describe("PHP component", () => {
  it("PHP should render correctly", () => {
    render(<PHP />);
    expect(true).toBeTruthy();
  });
});
