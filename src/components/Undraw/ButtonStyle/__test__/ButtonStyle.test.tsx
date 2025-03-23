import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ButtonStyle from "../ButtonStyle";

describe("ButtonStyle component", () => {
  it("ButtonStyle should render correctly", () => {
    render(<ButtonStyle />);
    expect(true).toBeTruthy();
  });
});
