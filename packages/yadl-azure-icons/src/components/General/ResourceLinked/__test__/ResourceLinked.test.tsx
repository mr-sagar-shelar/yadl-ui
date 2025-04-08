import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResourceLinked from "../ResourceLinked";

describe("ResourceLinked component", () => {
  it("ResourceLinked should render correctly", () => {
    render(<ResourceLinked />);
    expect(true).toBeTruthy();
  });
});
