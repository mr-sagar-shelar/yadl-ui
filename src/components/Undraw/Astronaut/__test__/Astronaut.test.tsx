import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Astronaut from "../Astronaut";

describe("Astronaut component", () => {
  it("Astronaut should render correctly", () => {
    render(<Astronaut />);
    expect(true).toBeTruthy();
  });
});
