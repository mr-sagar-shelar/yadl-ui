import type { Meta, StoryObj } from "@storybook/react";
import Themeisle416 from "../Themeisle416";

const meta: Meta<typeof Themeisle416> = { title: "Themeisle/Themeisle416", component: Themeisle416 };

export default meta;
type Story = StoryObj<typeof Themeisle416>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
