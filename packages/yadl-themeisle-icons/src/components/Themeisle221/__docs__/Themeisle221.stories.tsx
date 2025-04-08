import type { Meta, StoryObj } from "@storybook/react";
import Themeisle221 from "../Themeisle221";

const meta: Meta<typeof Themeisle221> = { title: "Themeisle/Themeisle221", component: Themeisle221 };

export default meta;
type Story = StoryObj<typeof Themeisle221>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
