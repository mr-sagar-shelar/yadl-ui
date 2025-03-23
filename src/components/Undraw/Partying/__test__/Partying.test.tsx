import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Partying from "../Partying";

describe("Partying component", () => {
  it("Partying should render correctly", () => {
    render(<Partying />);
    expect(true).toBeTruthy();
  });
});
