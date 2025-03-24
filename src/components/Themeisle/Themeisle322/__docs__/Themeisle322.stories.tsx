import type { Meta, StoryObj } from "@storybook/react";
import Themeisle322 from "../Themeisle322";

const meta: Meta<typeof Themeisle322> = { title: "Themeisle/Themeisle322", component: Themeisle322 };

export default meta;
type Story = StoryObj<typeof Themeisle322>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
