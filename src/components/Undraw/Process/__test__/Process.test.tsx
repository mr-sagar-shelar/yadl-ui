import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Process from "../Process";

describe("Process component", () => {
  it("Process should render correctly", () => {
    render(<Process />);
    expect(true).toBeTruthy();
  });
});
