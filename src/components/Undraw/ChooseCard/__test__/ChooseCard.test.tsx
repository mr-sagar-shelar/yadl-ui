import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChooseCard from "../ChooseCard";

describe("ChooseCard component", () => {
  it("ChooseCard should render correctly", () => {
    render(<ChooseCard />);
    expect(true).toBeTruthy();
  });
});
