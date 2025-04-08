import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FSxforLustre from "../FSxforLustre";

describe("FSxforLustre component", () => {
  it("FSxforLustre should render correctly", () => {
    render(<FSxforLustre />);
    expect(true).toBeTruthy();
  });
});
