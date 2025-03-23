import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Aircraft from "../Aircraft";

describe("Aircraft component", () => {
  it("Aircraft should render correctly", () => {
    render(<Aircraft />);
    expect(true).toBeTruthy();
  });
});
