import type { Meta, StoryObj } from "@storybook/react";
import Themeisle350 from "../Themeisle350";

const meta: Meta<typeof Themeisle350> = { title: "Themeisle/Themeisle350", component: Themeisle350 };

export default meta;
type Story = StoryObj<typeof Themeisle350>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
