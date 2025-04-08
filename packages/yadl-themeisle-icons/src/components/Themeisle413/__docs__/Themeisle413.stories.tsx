import type { Meta, StoryObj } from "@storybook/react";
import Themeisle413 from "../Themeisle413";

const meta: Meta<typeof Themeisle413> = { title: "Themeisle/Themeisle413", component: Themeisle413 };

export default meta;
type Story = StoryObj<typeof Themeisle413>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
