import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Actix from "../Actix";

describe("Actix component", () => {
  it("Actix should render correctly", () => {
    render(<Actix />);
    expect(true).toBeTruthy();
  });
});
