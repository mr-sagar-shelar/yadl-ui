import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyDocuments from "../MyDocuments";

describe("MyDocuments component", () => {
  it("MyDocuments should render correctly", () => {
    render(<MyDocuments />);
    expect(true).toBeTruthy();
  });
});
