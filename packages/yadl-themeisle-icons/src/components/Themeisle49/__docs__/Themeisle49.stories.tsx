import type { Meta, StoryObj } from "@storybook/react";
import Themeisle49 from "../Themeisle49";

const meta: Meta<typeof Themeisle49> = { title: "Themeisle/Themeisle49", component: Themeisle49 };

export default meta;
type Story = StoryObj<typeof Themeisle49>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
