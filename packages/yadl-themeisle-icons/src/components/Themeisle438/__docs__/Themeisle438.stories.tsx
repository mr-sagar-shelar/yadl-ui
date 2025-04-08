import type { Meta, StoryObj } from "@storybook/react";
import Themeisle438 from "../Themeisle438";

const meta: Meta<typeof Themeisle438> = { title: "Themeisle/Themeisle438", component: Themeisle438 };

export default meta;
type Story = StoryObj<typeof Themeisle438>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
