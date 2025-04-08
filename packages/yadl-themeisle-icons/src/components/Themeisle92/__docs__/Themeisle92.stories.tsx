import type { Meta, StoryObj } from "@storybook/react";
import Themeisle92 from "../Themeisle92";

const meta: Meta<typeof Themeisle92> = { title: "Themeisle/Themeisle92", component: Themeisle92 };

export default meta;
type Story = StoryObj<typeof Themeisle92>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
