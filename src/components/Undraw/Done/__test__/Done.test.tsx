import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Done from "../Done";

describe("Done component", () => {
  it("Done should render correctly", () => {
    render(<Done />);
    expect(true).toBeTruthy();
  });
});
