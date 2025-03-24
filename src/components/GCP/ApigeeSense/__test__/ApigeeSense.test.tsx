import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApigeeSense from "../ApigeeSense";

describe("ApigeeSense component", () => {
  it("ApigeeSense should render correctly", () => {
    render(<ApigeeSense />);
    expect(true).toBeTruthy();
  });
});
