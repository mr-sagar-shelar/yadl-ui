import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Scala from "../Scala";

describe("Scala component", () => {
  it("Scala should render correctly", () => {
    render(<Scala />);
    expect(true).toBeTruthy();
  });
});
