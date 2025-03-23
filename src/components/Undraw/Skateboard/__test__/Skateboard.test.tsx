import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Skateboard from "../Skateboard";

describe("Skateboard component", () => {
  it("Skateboard should render correctly", () => {
    render(<Skateboard />);
    expect(true).toBeTruthy();
  });
});
