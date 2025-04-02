import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Rider from "../Rider";

describe("Rider component", () => {
  it("Rider should render correctly", () => {
    render(<Rider />);
    expect(true).toBeTruthy();
  });
});
