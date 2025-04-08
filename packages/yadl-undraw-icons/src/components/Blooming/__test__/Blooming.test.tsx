import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Blooming from "../Blooming";

describe("Blooming component", () => {
  it("Blooming should render correctly", () => {
    render(<Blooming />);
    expect(true).toBeTruthy();
  });
});
