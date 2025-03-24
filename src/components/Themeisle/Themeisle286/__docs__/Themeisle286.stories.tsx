import type { Meta, StoryObj } from "@storybook/react";
import Themeisle286 from "../Themeisle286";

const meta: Meta<typeof Themeisle286> = { title: "Themeisle/Themeisle286", component: Themeisle286 };

export default meta;
type Story = StoryObj<typeof Themeisle286>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
