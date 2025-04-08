import type { Meta, StoryObj } from "@storybook/react";
import Themeisle264 from "../Themeisle264";

const meta: Meta<typeof Themeisle264> = { title: "Themeisle/Themeisle264", component: Themeisle264 };

export default meta;
type Story = StoryObj<typeof Themeisle264>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
