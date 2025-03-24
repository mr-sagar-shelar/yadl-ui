import type { Meta, StoryObj } from "@storybook/react";
import Themeisle115 from "../Themeisle115";

const meta: Meta<typeof Themeisle115> = { title: "Themeisle/Themeisle115", component: Themeisle115 };

export default meta;
type Story = StoryObj<typeof Themeisle115>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
