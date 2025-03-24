import type { Meta, StoryObj } from "@storybook/react";
import Themeisle407 from "../Themeisle407";

const meta: Meta<typeof Themeisle407> = { title: "Themeisle/Themeisle407", component: Themeisle407 };

export default meta;
type Story = StoryObj<typeof Themeisle407>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
