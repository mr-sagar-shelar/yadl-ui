import type { Meta, StoryObj } from "@storybook/react";
import Themeisle99 from "../Themeisle99";

const meta: Meta<typeof Themeisle99> = { title: "Themeisle/Themeisle99", component: Themeisle99 };

export default meta;
type Story = StoryObj<typeof Themeisle99>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
