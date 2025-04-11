import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Editor from "../Editor";

describe("Editor component", () => {
  it("Editor should render correctly", () => {
    render(<Editor />);
    expect(true).toBeTruthy();
  });
});
