import type { Meta, StoryObj } from "@storybook/react";
import Themeisle287 from "../Themeisle287";

const meta: Meta<typeof Themeisle287> = { title: "Themeisle/Themeisle287", component: Themeisle287 };

export default meta;
type Story = StoryObj<typeof Themeisle287>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
