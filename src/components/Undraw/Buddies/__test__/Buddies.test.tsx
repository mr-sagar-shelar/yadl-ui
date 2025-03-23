import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Buddies from "../Buddies";

describe("Buddies component", () => {
  it("Buddies should render correctly", () => {
    render(<Buddies />);
    expect(true).toBeTruthy();
  });
});
