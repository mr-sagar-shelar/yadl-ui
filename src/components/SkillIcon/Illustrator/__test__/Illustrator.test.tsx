import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Illustrator from "../Illustrator";

describe("Illustrator component", () => {
  it("Illustrator should render correctly", () => {
    render(<Illustrator />);
    expect(true).toBeTruthy();
  });
});
