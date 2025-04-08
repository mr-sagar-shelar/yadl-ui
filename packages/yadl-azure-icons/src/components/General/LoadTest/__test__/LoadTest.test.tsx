import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LoadTest from "../LoadTest";

describe("LoadTest component", () => {
  it("LoadTest should render correctly", () => {
    render(<LoadTest />);
    expect(true).toBeTruthy();
  });
});
