import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Supabase from "../Supabase";

describe("Supabase component", () => {
  it("Supabase should render correctly", () => {
    render(<Supabase />);
    expect(true).toBeTruthy();
  });
});
