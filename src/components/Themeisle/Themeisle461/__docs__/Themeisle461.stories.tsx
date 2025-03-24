import type { Meta, StoryObj } from "@storybook/react";
import Themeisle461 from "../Themeisle461";

const meta: Meta<typeof Themeisle461> = { title: "Themeisle/Themeisle461", component: Themeisle461 };

export default meta;
type Story = StoryObj<typeof Themeisle461>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
