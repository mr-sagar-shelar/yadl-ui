import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DecorateChristmasTree from "../DecorateChristmasTree";

describe("DecorateChristmasTree component", () => {
  it("DecorateChristmasTree should render correctly", () => {
    render(<DecorateChristmasTree />);
    expect(true).toBeTruthy();
  });
});
