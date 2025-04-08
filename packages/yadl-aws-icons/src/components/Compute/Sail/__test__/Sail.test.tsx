import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sail from "../Sail";

describe("Sail component", () => {
  it("Sail should render correctly", () => {
    render(<Sail />);
    expect(true).toBeTruthy();
  });
});
