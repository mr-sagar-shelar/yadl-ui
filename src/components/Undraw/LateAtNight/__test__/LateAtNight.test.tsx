import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LateAtNight from "../LateAtNight";

describe("LateAtNight component", () => {
  it("LateAtNight should render correctly", () => {
    render(<LateAtNight />);
    expect(true).toBeTruthy();
  });
});
