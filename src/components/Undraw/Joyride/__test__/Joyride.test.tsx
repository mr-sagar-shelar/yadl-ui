import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Joyride from "../Joyride";

describe("Joyride component", () => {
  it("Joyride should render correctly", () => {
    render(<Joyride />);
    expect(true).toBeTruthy();
  });
});
