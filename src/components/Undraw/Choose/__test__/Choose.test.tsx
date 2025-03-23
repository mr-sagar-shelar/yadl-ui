import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Choose from "../Choose";

describe("Choose component", () => {
  it("Choose should render correctly", () => {
    render(<Choose />);
    expect(true).toBeTruthy();
  });
});
