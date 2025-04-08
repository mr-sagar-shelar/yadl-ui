import type { Meta, StoryObj } from "@storybook/react";
import Themeisle305 from "../Themeisle305";

const meta: Meta<typeof Themeisle305> = { title: "Themeisle/Themeisle305", component: Themeisle305 };

export default meta;
type Story = StoryObj<typeof Themeisle305>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
