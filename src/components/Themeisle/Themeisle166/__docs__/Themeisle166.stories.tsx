import type { Meta, StoryObj } from "@storybook/react";
import Themeisle166 from "../Themeisle166";

const meta: Meta<typeof Themeisle166> = { title: "Themeisle/Themeisle166", component: Themeisle166 };

export default meta;
type Story = StoryObj<typeof Themeisle166>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
