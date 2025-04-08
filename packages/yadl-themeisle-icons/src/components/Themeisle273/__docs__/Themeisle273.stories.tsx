import type { Meta, StoryObj } from "@storybook/react";
import Themeisle273 from "../Themeisle273";

const meta: Meta<typeof Themeisle273> = { title: "Themeisle/Themeisle273", component: Themeisle273 };

export default meta;
type Story = StoryObj<typeof Themeisle273>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
