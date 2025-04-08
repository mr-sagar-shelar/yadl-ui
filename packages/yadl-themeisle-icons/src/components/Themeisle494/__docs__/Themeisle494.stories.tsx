import type { Meta, StoryObj } from "@storybook/react";
import Themeisle494 from "../Themeisle494";

const meta: Meta<typeof Themeisle494> = { title: "Themeisle/Themeisle494", component: Themeisle494 };

export default meta;
type Story = StoryObj<typeof Themeisle494>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
