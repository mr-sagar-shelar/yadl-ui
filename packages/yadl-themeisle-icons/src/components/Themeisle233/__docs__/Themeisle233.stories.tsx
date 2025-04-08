import type { Meta, StoryObj } from "@storybook/react";
import Themeisle233 from "../Themeisle233";

const meta: Meta<typeof Themeisle233> = { title: "Themeisle/Themeisle233", component: Themeisle233 };

export default meta;
type Story = StoryObj<typeof Themeisle233>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
