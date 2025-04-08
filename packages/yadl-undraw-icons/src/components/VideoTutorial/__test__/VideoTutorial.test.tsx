import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoTutorial from "../VideoTutorial";

describe("VideoTutorial component", () => {
  it("VideoTutorial should render correctly", () => {
    render(<VideoTutorial />);
    expect(true).toBeTruthy();
  });
});
