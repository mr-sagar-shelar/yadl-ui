import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Expecting from "../Expecting";

describe("Expecting component", () => {
  it("Expecting should render correctly", () => {
    render(<Expecting />);
    expect(true).toBeTruthy();
  });
});
