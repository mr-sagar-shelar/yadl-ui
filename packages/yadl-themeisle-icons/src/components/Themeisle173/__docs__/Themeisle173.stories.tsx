import type { Meta, StoryObj } from "@storybook/react";
import Themeisle173 from "../Themeisle173";

const meta: Meta<typeof Themeisle173> = { title: "Themeisle/Themeisle173", component: Themeisle173 };

export default meta;
type Story = StoryObj<typeof Themeisle173>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
