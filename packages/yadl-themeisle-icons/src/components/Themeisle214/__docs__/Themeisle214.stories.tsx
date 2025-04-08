import type { Meta, StoryObj } from "@storybook/react";
import Themeisle214 from "../Themeisle214";

const meta: Meta<typeof Themeisle214> = { title: "Themeisle/Themeisle214", component: Themeisle214 };

export default meta;
type Story = StoryObj<typeof Themeisle214>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
