import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Yew from "../Yew";

describe("Yew component", () => {
  it("Yew should render correctly", () => {
    render(<Yew />);
    expect(true).toBeTruthy();
  });
});
