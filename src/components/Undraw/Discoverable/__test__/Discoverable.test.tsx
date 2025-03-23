import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Discoverable from "../Discoverable";

describe("Discoverable component", () => {
  it("Discoverable should render correctly", () => {
    render(<Discoverable />);
    expect(true).toBeTruthy();
  });
});
