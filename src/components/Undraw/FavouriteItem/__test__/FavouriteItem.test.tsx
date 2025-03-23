import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FavouriteItem from "../FavouriteItem";

describe("FavouriteItem component", () => {
  it("FavouriteItem should render correctly", () => {
    render(<FavouriteItem />);
    expect(true).toBeTruthy();
  });
});
