import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Documents from "../Documents";

describe("Documents component", () => {
  it("Documents should render correctly", () => {
    render(<Documents />);
    expect(true).toBeTruthy();
  });
});
