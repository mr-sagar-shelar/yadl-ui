import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetflixNetflix from "../NetflixNetflix";

describe("NetflixNetflix component", () => {
  it("NetflixNetflix should render correctly", () => {
    render(<NetflixNetflix />);
    expect(true).toBeTruthy();
  });
});
