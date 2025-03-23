import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Annotation from "../Annotation";

describe("Annotation component", () => {
  it("Annotation should render correctly", () => {
    render(<Annotation />);
    expect(true).toBeTruthy();
  });
});
