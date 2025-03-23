import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HappyNews from "../HappyNews";

describe("HappyNews component", () => {
  it("HappyNews should render correctly", () => {
    render(<HappyNews />);
    expect(true).toBeTruthy();
  });
});
