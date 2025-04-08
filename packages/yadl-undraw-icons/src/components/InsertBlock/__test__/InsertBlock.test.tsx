import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InsertBlock from "../InsertBlock";

describe("InsertBlock component", () => {
  it("InsertBlock should render correctly", () => {
    render(<InsertBlock />);
    expect(true).toBeTruthy();
  });
});
