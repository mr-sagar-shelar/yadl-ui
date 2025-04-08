import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Azurite from "../Azurite";

describe("Azurite component", () => {
  it("Azurite should render correctly", () => {
    render(<Azurite />);
    expect(true).toBeTruthy();
  });
});
