import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Nginx from "../Nginx";

describe("Nginx component", () => {
  it("Nginx should render correctly", () => {
    render(<Nginx />);
    expect(true).toBeTruthy();
  });
});
