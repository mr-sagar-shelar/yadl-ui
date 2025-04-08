import type { Meta, StoryObj } from "@storybook/react";
import Themeisle98 from "../Themeisle98";

const meta: Meta<typeof Themeisle98> = { title: "Themeisle/Themeisle98", component: Themeisle98 };

export default meta;
type Story = StoryObj<typeof Themeisle98>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
