import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FeelingOfJoy from "../FeelingOfJoy";

describe("FeelingOfJoy component", () => {
  it("FeelingOfJoy should render correctly", () => {
    render(<FeelingOfJoy />);
    expect(true).toBeTruthy();
  });
});
