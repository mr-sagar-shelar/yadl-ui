import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MillennialGirlMillennialGirl from "../MillennialGirlMillennialGirl";

describe("MillennialGirlMillennialGirl component", () => {
  it("MillennialGirlMillennialGirl should render correctly", () => {
    render(<MillennialGirlMillennialGirl />);
    expect(true).toBeTruthy();
  });
});
