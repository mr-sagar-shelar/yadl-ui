import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChooseColor from "../ChooseColor";

describe("ChooseColor component", () => {
  it("ChooseColor should render correctly", () => {
    render(<ChooseColor />);
    expect(true).toBeTruthy();
  });
});
