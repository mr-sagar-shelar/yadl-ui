import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddColor from "../AddColor";

describe("AddColor component", () => {
  it("AddColor should render correctly", () => {
    render(<AddColor />);
    expect(true).toBeTruthy();
  });
});
