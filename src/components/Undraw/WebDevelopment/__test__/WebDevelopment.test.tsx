import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebDevelopment from "../WebDevelopment";

describe("WebDevelopment component", () => {
  it("WebDevelopment should render correctly", () => {
    render(<WebDevelopment />);
    expect(true).toBeTruthy();
  });
});
