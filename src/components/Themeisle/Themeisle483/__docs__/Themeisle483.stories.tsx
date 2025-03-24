import type { Meta, StoryObj } from "@storybook/react";
import Themeisle483 from "../Themeisle483";

const meta: Meta<typeof Themeisle483> = { title: "Themeisle/Themeisle483", component: Themeisle483 };

export default meta;
type Story = StoryObj<typeof Themeisle483>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
