import type { Meta, StoryObj } from "@storybook/react";
import Themeisle9 from "../Themeisle9";

const meta: Meta<typeof Themeisle9> = { title: "Themeisle/Themeisle9", component: Themeisle9 };

export default meta;
type Story = StoryObj<typeof Themeisle9>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
