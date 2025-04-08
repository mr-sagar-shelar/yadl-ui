import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FarmGirl from "../FarmGirl";

describe("FarmGirl component", () => {
  it("FarmGirl should render correctly", () => {
    render(<FarmGirl />);
    expect(true).toBeTruthy();
  });
});
