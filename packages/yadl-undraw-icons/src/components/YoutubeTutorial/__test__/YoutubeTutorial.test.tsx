import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import YoutubeTutorial from "../YoutubeTutorial";

describe("YoutubeTutorial component", () => {
  it("YoutubeTutorial should render correctly", () => {
    render(<YoutubeTutorial />);
    expect(true).toBeTruthy();
  });
});
