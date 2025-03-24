import type { Meta, StoryObj } from "@storybook/react";
import Themeisle415 from "../Themeisle415";

const meta: Meta<typeof Themeisle415> = { title: "Themeisle/Themeisle415", component: Themeisle415 };

export default meta;
type Story = StoryObj<typeof Themeisle415>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
