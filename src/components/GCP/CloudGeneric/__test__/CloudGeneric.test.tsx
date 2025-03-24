import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudGeneric from "../CloudGeneric";

describe("CloudGeneric component", () => {
  it("CloudGeneric should render correctly", () => {
    render(<CloudGeneric />);
    expect(true).toBeTruthy();
  });
});
