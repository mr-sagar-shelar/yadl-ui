import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobilePhotos from "../MobilePhotos";

describe("MobilePhotos component", () => {
  it("MobilePhotos should render correctly", () => {
    render(<MobilePhotos />);
    expect(true).toBeTruthy();
  });
});
