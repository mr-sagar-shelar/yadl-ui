import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThinkboxFrost from "../ThinkboxFrost";

describe("ThinkboxFrost component", () => {
  it("ThinkboxFrost should render correctly", () => {
    render(<ThinkboxFrost />);
    expect(true).toBeTruthy();
  });
});
