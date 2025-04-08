import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Azul from "../Azul";

describe("Azul component", () => {
  it("Azul should render correctly", () => {
    render(<Azul />);
    expect(true).toBeTruthy();
  });
});
