import type { Meta, StoryObj } from "@storybook/react";
import Themeisle321 from "../Themeisle321";

const meta: Meta<typeof Themeisle321> = { title: "Themeisle/Themeisle321", component: Themeisle321 };

export default meta;
type Story = StoryObj<typeof Themeisle321>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
