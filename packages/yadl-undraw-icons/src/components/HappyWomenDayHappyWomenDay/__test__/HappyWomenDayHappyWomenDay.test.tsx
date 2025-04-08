import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HappyWomenDayHappyWomenDay from "../HappyWomenDayHappyWomenDay";

describe("HappyWomenDayHappyWomenDay component", () => {
  it("HappyWomenDayHappyWomenDay should render correctly", () => {
    render(<HappyWomenDayHappyWomenDay />);
    expect(true).toBeTruthy();
  });
});
