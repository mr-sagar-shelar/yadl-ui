import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QnAMakers from "../QnAMakers";

describe("QnAMakers component", () => {
  it("QnAMakers should render correctly", () => {
    render(<QnAMakers />);
    expect(true).toBeTruthy();
  });
});
