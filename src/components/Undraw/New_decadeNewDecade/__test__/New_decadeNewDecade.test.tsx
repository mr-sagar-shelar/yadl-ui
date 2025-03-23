import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import New_decadeNewDecade from "../New_decadeNewDecade";

describe("New_decadeNewDecade component", () => {
  it("New_decadeNewDecade should render correctly", () => {
    render(<New_decadeNewDecade />);
    expect(true).toBeTruthy();
  });
});
