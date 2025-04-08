import type { Meta, StoryObj } from "@storybook/react";
import Themeisle232 from "../Themeisle232";

const meta: Meta<typeof Themeisle232> = { title: "Themeisle/Themeisle232", component: Themeisle232 };

export default meta;
type Story = StoryObj<typeof Themeisle232>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
