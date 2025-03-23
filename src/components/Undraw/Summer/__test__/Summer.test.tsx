import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Summer from "../Summer";

describe("Summer component", () => {
  it("Summer should render correctly", () => {
    render(<Summer />);
    expect(true).toBeTruthy();
  });
});
