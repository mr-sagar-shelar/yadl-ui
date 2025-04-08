import type { Meta, StoryObj } from "@storybook/react";
import Themeisle476 from "../Themeisle476";

const meta: Meta<typeof Themeisle476> = { title: "Themeisle/Themeisle476", component: Themeisle476 };

export default meta;
type Story = StoryObj<typeof Themeisle476>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
