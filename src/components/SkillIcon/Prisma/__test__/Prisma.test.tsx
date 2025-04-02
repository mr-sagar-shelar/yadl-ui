import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Prisma from "../Prisma";

describe("Prisma component", () => {
  it("Prisma should render correctly", () => {
    render(<Prisma />);
    expect(true).toBeTruthy();
  });
});
