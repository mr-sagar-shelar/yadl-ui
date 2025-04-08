import type { Meta, StoryObj } from "@storybook/react";
import Themeisle46 from "../Themeisle46";

const meta: Meta<typeof Themeisle46> = { title: "Themeisle/Themeisle46", component: Themeisle46 };

export default meta;
type Story = StoryObj<typeof Themeisle46>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
