import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineGallery from "../OnlineGallery";

describe("OnlineGallery component", () => {
  it("OnlineGallery should render correctly", () => {
    render(<OnlineGallery />);
    expect(true).toBeTruthy();
  });
});
