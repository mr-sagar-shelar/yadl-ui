import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Photoshop from "../Photoshop";

describe("Photoshop component", () => {
  it("Photoshop should render correctly", () => {
    render(<Photoshop />);
    expect(true).toBeTruthy();
  });
});
