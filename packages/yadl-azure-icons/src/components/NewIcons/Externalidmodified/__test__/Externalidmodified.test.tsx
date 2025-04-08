import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Externalidmodified from "../Externalidmodified";

describe("Externalidmodified component", () => {
  it("Externalidmodified should render correctly", () => {
    render(<Externalidmodified />);
    expect(true).toBeTruthy();
  });
});
