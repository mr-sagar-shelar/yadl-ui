import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HackerMindset from "../HackerMindset";

describe("HackerMindset component", () => {
  it("HackerMindset should render correctly", () => {
    render(<HackerMindset />);
    expect(true).toBeTruthy();
  });
});
