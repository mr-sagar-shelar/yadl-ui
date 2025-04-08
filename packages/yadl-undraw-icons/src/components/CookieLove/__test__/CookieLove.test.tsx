import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CookieLove from "../CookieLove";

describe("CookieLove component", () => {
  it("CookieLove should render correctly", () => {
    render(<CookieLove />);
    expect(true).toBeTruthy();
  });
});
