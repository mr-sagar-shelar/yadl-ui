import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AboutMe from "../AboutMe";

describe("AboutMe component", () => {
  it("AboutMe should render correctly", () => {
    render(<AboutMe />);
    expect(true).toBeTruthy();
  });
});
