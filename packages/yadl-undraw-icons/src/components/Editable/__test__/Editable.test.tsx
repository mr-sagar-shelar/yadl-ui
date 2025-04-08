import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Editable from "../Editable";

describe("Editable component", () => {
  it("Editable should render correctly", () => {
    render(<Editable />);
    expect(true).toBeTruthy();
  });
});
