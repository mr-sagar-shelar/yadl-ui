import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dart from "../Dart";

describe("Dart component", () => {
  it("Dart should render correctly", () => {
    render(<Dart />);
    expect(true).toBeTruthy();
  });
});
