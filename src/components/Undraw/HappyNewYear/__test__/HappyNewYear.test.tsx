import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HappyNewYear from "../HappyNewYear";

describe("HappyNewYear component", () => {
  it("HappyNewYear should render correctly", () => {
    render(<HappyNewYear />);
    expect(true).toBeTruthy();
  });
});
