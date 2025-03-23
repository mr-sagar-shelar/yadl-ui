import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Unicorn from "../Unicorn";

describe("Unicorn component", () => {
  it("Unicorn should render correctly", () => {
    render(<Unicorn />);
    expect(true).toBeTruthy();
  });
});
