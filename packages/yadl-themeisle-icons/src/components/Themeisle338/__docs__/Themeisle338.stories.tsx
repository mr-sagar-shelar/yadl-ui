import type { Meta, StoryObj } from "@storybook/react";
import Themeisle338 from "../Themeisle338";

const meta: Meta<typeof Themeisle338> = { title: "Themeisle/Themeisle338", component: Themeisle338 };

export default meta;
type Story = StoryObj<typeof Themeisle338>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
