import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NitroEnclaves from "../NitroEnclaves";

describe("NitroEnclaves component", () => {
  it("NitroEnclaves should render correctly", () => {
    render(<NitroEnclaves />);
    expect(true).toBeTruthy();
  });
});
