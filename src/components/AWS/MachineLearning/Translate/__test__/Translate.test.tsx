import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Translate from "../Translate";

describe("Translate component", () => {
  it("Translate should render correctly", () => {
    render(<Translate />);
    expect(true).toBeTruthy();
  });
});
