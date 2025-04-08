import type { Meta, StoryObj } from "@storybook/react";
import Themeisle45 from "../Themeisle45";

const meta: Meta<typeof Themeisle45> = { title: "Themeisle/Themeisle45", component: Themeisle45 };

export default meta;
type Story = StoryObj<typeof Themeisle45>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
