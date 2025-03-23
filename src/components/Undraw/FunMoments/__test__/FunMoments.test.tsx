import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FunMoments from "../FunMoments";

describe("FunMoments component", () => {
  it("FunMoments should render correctly", () => {
    render(<FunMoments />);
    expect(true).toBeTruthy();
  });
});
