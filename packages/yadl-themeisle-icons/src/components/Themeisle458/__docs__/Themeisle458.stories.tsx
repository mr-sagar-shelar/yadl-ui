import type { Meta, StoryObj } from "@storybook/react";
import Themeisle458 from "../Themeisle458";

const meta: Meta<typeof Themeisle458> = { title: "Themeisle/Themeisle458", component: Themeisle458 };

export default meta;
type Story = StoryObj<typeof Themeisle458>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
