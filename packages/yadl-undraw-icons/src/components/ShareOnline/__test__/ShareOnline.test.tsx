import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShareOnline from "../ShareOnline";

describe("ShareOnline component", () => {
  it("ShareOnline should render correctly", () => {
    render(<ShareOnline />);
    expect(true).toBeTruthy();
  });
});
