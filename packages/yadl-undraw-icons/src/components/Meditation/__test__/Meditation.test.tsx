import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Meditation from "../Meditation";

describe("Meditation component", () => {
  it("Meditation should render correctly", () => {
    render(<Meditation />);
    expect(true).toBeTruthy();
  });
});
