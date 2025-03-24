import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Lumberyard from "../Lumberyard";

describe("Lumberyard component", () => {
  it("Lumberyard should render correctly", () => {
    render(<Lumberyard />);
    expect(true).toBeTruthy();
  });
});
