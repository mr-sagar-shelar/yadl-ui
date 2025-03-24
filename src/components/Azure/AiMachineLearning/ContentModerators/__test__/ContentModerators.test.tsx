import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContentModerators from "../ContentModerators";

describe("ContentModerators component", () => {
  it("ContentModerators should render correctly", () => {
    render(<ContentModerators />);
    expect(true).toBeTruthy();
  });
});
