import type { Meta, StoryObj } from "@storybook/react";
import Themeisle116 from "../Themeisle116";

const meta: Meta<typeof Themeisle116> = { title: "Themeisle/Themeisle116", component: Themeisle116 };

export default meta;
type Story = StoryObj<typeof Themeisle116>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
