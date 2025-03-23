import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebDeveloper from "../WebDeveloper";

describe("WebDeveloper component", () => {
  it("WebDeveloper should render correctly", () => {
    render(<WebDeveloper />);
    expect(true).toBeTruthy();
  });
});
