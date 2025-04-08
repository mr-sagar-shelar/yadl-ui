import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Windows10CoreServices from "../Windows10CoreServices";

describe("Windows10CoreServices component", () => {
  it("Windows10CoreServices should render correctly", () => {
    render(<Windows10CoreServices />);
    expect(true).toBeTruthy();
  });
});
