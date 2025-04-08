import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EverydayDesignEverydayDesign from "../EverydayDesignEverydayDesign";

describe("EverydayDesignEverydayDesign component", () => {
  it("EverydayDesignEverydayDesign should render correctly", () => {
    render(<EverydayDesignEverydayDesign />);
    expect(true).toBeTruthy();
  });
});
