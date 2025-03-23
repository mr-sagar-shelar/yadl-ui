import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DogWalking from "../DogWalking";

describe("DogWalking component", () => {
  it("DogWalking should render correctly", () => {
    render(<DogWalking />);
    expect(true).toBeTruthy();
  });
});
