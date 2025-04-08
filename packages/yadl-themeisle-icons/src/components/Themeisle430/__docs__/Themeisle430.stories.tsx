import type { Meta, StoryObj } from "@storybook/react";
import Themeisle430 from "../Themeisle430";

const meta: Meta<typeof Themeisle430> = { title: "Themeisle/Themeisle430", component: Themeisle430 };

export default meta;
type Story = StoryObj<typeof Themeisle430>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
