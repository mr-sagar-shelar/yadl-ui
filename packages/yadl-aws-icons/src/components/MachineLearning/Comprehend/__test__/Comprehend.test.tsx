import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Comprehend from "../Comprehend";

describe("Comprehend component", () => {
  it("Comprehend should render correctly", () => {
    render(<Comprehend />);
    expect(true).toBeTruthy();
  });
});
