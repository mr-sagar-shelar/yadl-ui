import type { Meta, StoryObj } from "@storybook/react";
import Themeisle412 from "../Themeisle412";

const meta: Meta<typeof Themeisle412> = { title: "Themeisle/Themeisle412", component: Themeisle412 };

export default meta;
type Story = StoryObj<typeof Themeisle412>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
