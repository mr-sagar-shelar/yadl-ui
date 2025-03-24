import type { Meta, StoryObj } from "@storybook/react";
import Themeisle312 from "../Themeisle312";

const meta: Meta<typeof Themeisle312> = { title: "Themeisle/Themeisle312", component: Themeisle312 };

export default meta;
type Story = StoryObj<typeof Themeisle312>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
