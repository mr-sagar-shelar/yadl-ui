import type { Meta, StoryObj } from "@storybook/react";
import Themeisle50 from "../Themeisle50";

const meta: Meta<typeof Themeisle50> = { title: "Themeisle/Themeisle50", component: Themeisle50 };

export default meta;
type Story = StoryObj<typeof Themeisle50>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
