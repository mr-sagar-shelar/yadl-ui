import type { Meta, StoryObj } from "@storybook/react";
import Themeisle290 from "../Themeisle290";

const meta: Meta<typeof Themeisle290> = { title: "Themeisle/Themeisle290", component: Themeisle290 };

export default meta;
type Story = StoryObj<typeof Themeisle290>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
