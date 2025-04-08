import type { Meta, StoryObj } from "@storybook/react";
import Themeisle138 from "../Themeisle138";

const meta: Meta<typeof Themeisle138> = { title: "Themeisle/Themeisle138", component: Themeisle138 };

export default meta;
type Story = StoryObj<typeof Themeisle138>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
