import type { Meta, StoryObj } from "@storybook/react";
import Themeisle188 from "../Themeisle188";

const meta: Meta<typeof Themeisle188> = { title: "Themeisle/Themeisle188", component: Themeisle188 };

export default meta;
type Story = StoryObj<typeof Themeisle188>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
