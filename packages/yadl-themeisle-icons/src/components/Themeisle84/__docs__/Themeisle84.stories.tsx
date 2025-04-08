import type { Meta, StoryObj } from "@storybook/react";
import Themeisle84 from "../Themeisle84";

const meta: Meta<typeof Themeisle84> = { title: "Themeisle/Themeisle84", component: Themeisle84 };

export default meta;
type Story = StoryObj<typeof Themeisle84>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
