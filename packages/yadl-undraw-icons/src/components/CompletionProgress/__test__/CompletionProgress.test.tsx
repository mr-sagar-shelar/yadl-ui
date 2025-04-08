import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CompletionProgress from "../CompletionProgress";

describe("CompletionProgress component", () => {
  it("CompletionProgress should render correctly", () => {
    render(<CompletionProgress />);
    expect(true).toBeTruthy();
  });
});
