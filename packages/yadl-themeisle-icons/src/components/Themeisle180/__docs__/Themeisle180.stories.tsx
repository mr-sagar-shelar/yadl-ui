import type { Meta, StoryObj } from "@storybook/react";
import Themeisle180 from "../Themeisle180";

const meta: Meta<typeof Themeisle180> = { title: "Themeisle/Themeisle180", component: Themeisle180 };

export default meta;
type Story = StoryObj<typeof Themeisle180>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
