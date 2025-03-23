import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InLove from "../InLove";

describe("InLove component", () => {
  it("InLove should render correctly", () => {
    render(<InLove />);
    expect(true).toBeTruthy();
  });
});
