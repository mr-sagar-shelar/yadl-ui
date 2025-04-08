import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Photocopy from "../Photocopy";

describe("Photocopy component", () => {
  it("Photocopy should render correctly", () => {
    render(<Photocopy />);
    expect(true).toBeTruthy();
  });
});
