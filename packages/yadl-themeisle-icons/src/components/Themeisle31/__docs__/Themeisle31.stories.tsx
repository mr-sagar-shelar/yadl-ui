import type { Meta, StoryObj } from "@storybook/react";
import Themeisle31 from "../Themeisle31";

const meta: Meta<typeof Themeisle31> = { title: "Themeisle/Themeisle31", component: Themeisle31 };

export default meta;
type Story = StoryObj<typeof Themeisle31>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
