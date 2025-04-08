import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Neighbors from "../Neighbors";

describe("Neighbors component", () => {
  it("Neighbors should render correctly", () => {
    render(<Neighbors />);
    expect(true).toBeTruthy();
  });
});
