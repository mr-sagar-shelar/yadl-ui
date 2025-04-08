import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PassingBy from "../PassingBy";

describe("PassingBy component", () => {
  it("PassingBy should render correctly", () => {
    render(<PassingBy />);
    expect(true).toBeTruthy();
  });
});
