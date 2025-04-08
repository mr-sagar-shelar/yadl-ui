import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageDefinitions from "../ImageDefinitions";

describe("ImageDefinitions component", () => {
  it("ImageDefinitions should render correctly", () => {
    render(<ImageDefinitions />);
    expect(true).toBeTruthy();
  });
});
