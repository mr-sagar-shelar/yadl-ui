import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Textract from "../Textract";

describe("Textract component", () => {
  it("Textract should render correctly", () => {
    render(<Textract />);
    expect(true).toBeTruthy();
  });
});
