import type { Meta, StoryObj } from "@storybook/react";
import Themeisle131 from "../Themeisle131";

const meta: Meta<typeof Themeisle131> = { title: "Themeisle/Themeisle131", component: Themeisle131 };

export default meta;
type Story = StoryObj<typeof Themeisle131>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
