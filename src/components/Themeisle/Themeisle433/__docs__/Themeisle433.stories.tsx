import type { Meta, StoryObj } from "@storybook/react";
import Themeisle433 from "../Themeisle433";

const meta: Meta<typeof Themeisle433> = { title: "Themeisle/Themeisle433", component: Themeisle433 };

export default meta;
type Story = StoryObj<typeof Themeisle433>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
