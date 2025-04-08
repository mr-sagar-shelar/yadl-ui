import type { Meta, StoryObj } from "@storybook/react";
import Themeisle85 from "../Themeisle85";

const meta: Meta<typeof Themeisle85> = { title: "Themeisle/Themeisle85", component: Themeisle85 };

export default meta;
type Story = StoryObj<typeof Themeisle85>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
