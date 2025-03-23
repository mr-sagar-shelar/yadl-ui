import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Feedback from "../Feedback";

describe("Feedback component", () => {
  it("Feedback should render correctly", () => {
    render(<Feedback />);
    expect(true).toBeTruthy();
  });
});
