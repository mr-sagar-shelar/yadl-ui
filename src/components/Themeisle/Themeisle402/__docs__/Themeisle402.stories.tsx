import type { Meta, StoryObj } from "@storybook/react";
import Themeisle402 from "../Themeisle402";

const meta: Meta<typeof Themeisle402> = { title: "Themeisle/Themeisle402", component: Themeisle402 };

export default meta;
type Story = StoryObj<typeof Themeisle402>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
