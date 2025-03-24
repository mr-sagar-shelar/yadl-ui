import type { Meta, StoryObj } from "@storybook/react";
import Themeisle495 from "../Themeisle495";

const meta: Meta<typeof Themeisle495> = { title: "Themeisle/Themeisle495", component: Themeisle495 };

export default meta;
type Story = StoryObj<typeof Themeisle495>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
