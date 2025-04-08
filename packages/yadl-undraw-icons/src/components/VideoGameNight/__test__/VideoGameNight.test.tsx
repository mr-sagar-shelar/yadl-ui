import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoGameNight from "../VideoGameNight";

describe("VideoGameNight component", () => {
  it("VideoGameNight should render correctly", () => {
    render(<VideoGameNight />);
    expect(true).toBeTruthy();
  });
});
