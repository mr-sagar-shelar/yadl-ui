import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComposeMusic from "../ComposeMusic";

describe("ComposeMusic component", () => {
  it("ComposeMusic should render correctly", () => {
    render(<ComposeMusic />);
    expect(true).toBeTruthy();
  });
});
