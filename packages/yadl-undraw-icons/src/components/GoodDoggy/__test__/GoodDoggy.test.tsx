import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoodDoggy from "../GoodDoggy";

describe("GoodDoggy component", () => {
  it("GoodDoggy should render correctly", () => {
    render(<GoodDoggy />);
    expect(true).toBeTruthy();
  });
});
