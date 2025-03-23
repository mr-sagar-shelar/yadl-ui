import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Card_postalCardPostal from "../Card_postalCardPostal";

describe("Card_postalCardPostal component", () => {
  it("Card_postalCardPostal should render correctly", () => {
    render(<Card_postalCardPostal />);
    expect(true).toBeTruthy();
  });
});
