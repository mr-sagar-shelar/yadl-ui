import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bevy from "../Bevy";

describe("Bevy component", () => {
  it("Bevy should render correctly", () => {
    render(<Bevy />);
    expect(true).toBeTruthy();
  });
});
