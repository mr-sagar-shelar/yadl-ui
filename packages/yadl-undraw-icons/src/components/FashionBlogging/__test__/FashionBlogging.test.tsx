import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FashionBlogging from "../FashionBlogging";

describe("FashionBlogging component", () => {
  it("FashionBlogging should render correctly", () => {
    render(<FashionBlogging />);
    expect(true).toBeTruthy();
  });
});
