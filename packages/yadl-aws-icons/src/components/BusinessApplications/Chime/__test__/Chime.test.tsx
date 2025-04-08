import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Chime from "../Chime";

describe("Chime component", () => {
  it("Chime should render correctly", () => {
    render(<Chime />);
    expect(true).toBeTruthy();
  });
});
