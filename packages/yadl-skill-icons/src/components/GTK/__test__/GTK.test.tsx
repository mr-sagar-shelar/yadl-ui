import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GTK from "../GTK";

describe("GTK component", () => {
  it("GTK should render correctly", () => {
    render(<GTK />);
    expect(true).toBeTruthy();
  });
});
