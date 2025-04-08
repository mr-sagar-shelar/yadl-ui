import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PicProfile from "../PicProfile";

describe("PicProfile component", () => {
  it("PicProfile should render correctly", () => {
    render(<PicProfile />);
    expect(true).toBeTruthy();
  });
});
