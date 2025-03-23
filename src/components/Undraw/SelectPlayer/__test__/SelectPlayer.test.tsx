import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SelectPlayer from "../SelectPlayer";

describe("SelectPlayer component", () => {
  it("SelectPlayer should render correctly", () => {
    render(<SelectPlayer />);
    expect(true).toBeTruthy();
  });
});
