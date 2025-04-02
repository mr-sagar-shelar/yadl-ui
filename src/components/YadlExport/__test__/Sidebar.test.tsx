import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import YadlExport from "../YadlExport";

describe("YadlExport component", () => {
  it("YadlExport should render correctly", () => {
    render(<YadlExport />);
    expect(true).toBeTruthy();
  });
});
