import type { Meta, StoryObj } from "@storybook/react";
import Themeisle325 from "../Themeisle325";

const meta: Meta<typeof Themeisle325> = { title: "Themeisle/Themeisle325", component: Themeisle325 };

export default meta;
type Story = StoryObj<typeof Themeisle325>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
