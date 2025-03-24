import type { Meta, StoryObj } from "@storybook/react";
import Themeisle409 from "../Themeisle409";

const meta: Meta<typeof Themeisle409> = { title: "Themeisle/Themeisle409", component: Themeisle409 };

export default meta;
type Story = StoryObj<typeof Themeisle409>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
