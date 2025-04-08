import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Rekognition from "../Rekognition";

describe("Rekognition component", () => {
  it("Rekognition should render correctly", () => {
    render(<Rekognition />);
    expect(true).toBeTruthy();
  });
});
