import type { Meta, StoryObj } from "@storybook/react";
import Themeisle396 from "../Themeisle396";

const meta: Meta<typeof Themeisle396> = { title: "Themeisle/Themeisle396", component: Themeisle396 };

export default meta;
type Story = StoryObj<typeof Themeisle396>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
