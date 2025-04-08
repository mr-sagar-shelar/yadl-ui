import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Personalize from "../Personalize";

describe("Personalize component", () => {
  it("Personalize should render correctly", () => {
    render(<Personalize />);
    expect(true).toBeTruthy();
  });
});
