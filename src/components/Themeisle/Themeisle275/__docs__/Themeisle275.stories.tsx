import type { Meta, StoryObj } from "@storybook/react";
import Themeisle275 from "../Themeisle275";

const meta: Meta<typeof Themeisle275> = { title: "Themeisle/Themeisle275", component: Themeisle275 };

export default meta;
type Story = StoryObj<typeof Themeisle275>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
