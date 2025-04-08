import type { Meta, StoryObj } from "@storybook/react";
import Themeisle421 from "../Themeisle421";

const meta: Meta<typeof Themeisle421> = { title: "Themeisle/Themeisle421", component: Themeisle421 };

export default meta;
type Story = StoryObj<typeof Themeisle421>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
