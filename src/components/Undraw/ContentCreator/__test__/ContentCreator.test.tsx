import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContentCreator from "../ContentCreator";

describe("ContentCreator component", () => {
  it("ContentCreator should render correctly", () => {
    render(<ContentCreator />);
    expect(true).toBeTruthy();
  });
});
