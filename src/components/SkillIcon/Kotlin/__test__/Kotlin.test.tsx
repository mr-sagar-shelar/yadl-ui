import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Kotlin from "../Kotlin";

describe("Kotlin component", () => {
  it("Kotlin should render correctly", () => {
    render(<Kotlin />);
    expect(true).toBeTruthy();
  });
});
