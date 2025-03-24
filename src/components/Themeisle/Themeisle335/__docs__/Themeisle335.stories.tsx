import type { Meta, StoryObj } from "@storybook/react";
import Themeisle335 from "../Themeisle335";

const meta: Meta<typeof Themeisle335> = { title: "Themeisle/Themeisle335", component: Themeisle335 };

export default meta;
type Story = StoryObj<typeof Themeisle335>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
