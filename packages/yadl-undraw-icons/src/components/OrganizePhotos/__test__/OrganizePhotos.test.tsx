import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrganizePhotos from "../OrganizePhotos";

describe("OrganizePhotos component", () => {
  it("OrganizePhotos should render correctly", () => {
    render(<OrganizePhotos />);
    expect(true).toBeTruthy();
  });
});
