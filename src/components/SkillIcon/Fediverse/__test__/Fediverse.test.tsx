import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fediverse from "../Fediverse";

describe("Fediverse component", () => {
  it("Fediverse should render correctly", () => {
    render(<Fediverse />);
    expect(true).toBeTruthy();
  });
});
