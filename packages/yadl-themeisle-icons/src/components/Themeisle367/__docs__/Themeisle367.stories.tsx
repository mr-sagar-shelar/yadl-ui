import type { Meta, StoryObj } from "@storybook/react";
import Themeisle367 from "../Themeisle367";

const meta: Meta<typeof Themeisle367> = { title: "Themeisle/Themeisle367", component: Themeisle367 };

export default meta;
type Story = StoryObj<typeof Themeisle367>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
